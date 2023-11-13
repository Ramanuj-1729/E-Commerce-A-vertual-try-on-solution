const OrderItem = require('../../models/orderItem');
const Order = require('../../models/order');
const CustomErrorHandler = require('../../services/CustomErrorHandler');
const stripe = require('stripe')('sk_test_51NdqtISEDKkoqmSTJSvmKw69DHzsXFRcR2tQPSpU01QB5TQTdhSYckBw2cga0ut61HEOCGUljeeY0aHL8zEZZw4m00SzvAWsGY');

const orderController = {
    async createOrder(req, res, next) {
        const orderItemsIds = Promise.all(req.body.orderItems.map(async (orderItem) => {
            let newOrderItem = new OrderItem({
                quantity: orderItem.quantity,
                product: orderItem.product,
            });

            newOrderItem = await newOrderItem.save();

            return newOrderItem._id;
        }));

        const orderItemsIdsResolved = await orderItemsIds;

        const totalAmounts = await Promise.all(orderItemsIdsResolved.map(async (orderItemId) => {
            const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');
            const totalAmount = orderItem.product.price * orderItem.quantity;

            return totalAmount;
        }));

        const totalAmount = totalAmounts.reduce((a, b) => a + b, 0);

        const { shippingAddress, status, user } = req.body;

        let OrderDocument;

        try {
            OrderDocument = await Order.create({
                orderItems: orderItemsIdsResolved,
                shippingAddress,
                status,
                totalPrice: totalAmount,
                user,
            });
        } catch (error) {
            return next(error);
        }

        res.status(201).json(OrderDocument);
    },

    async getOrders(req, res, next) {
        let orders;

        try {
            orders = await Order.find().populate('user', 'name').sort({ '-createdAt': -1 });
        } catch (error) {
            return next(error);
        }

        res.status(200).json(orders);
    },

    async getOrder(req, res, next) {
        let order;

        try {
            order = await Order.findById(req.params.id).populate('user', 'name').populate({ path: 'orderItems', populate: { path: 'product', populate: 'category' } });
        } catch (error) {
            return next(error);
        }

        res.status(200).json(order);
    },

    async updateOrder(req, res, next) {
        const { status } = req.body;

        let orderDocument;

        try {
            orderDocument = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        } catch (error) {
            return next(error);
        }

        res.status(200).json(orderDocument);
    },

    async deleteOrder(req, res, next) {
        Order.findByIdAndRemove(req.params.id).then((order) => {
            if (order) {
                return res.status(200).json({ success: true, message: 'Order successfully removed!' });
            } else {
                return res.status(404).json({ success: false, message: 'Order not found!' });
            }
        }).catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
    },

    async createCheckoutSession(req, res, next) {
        const products = req.body;

        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.name,
                    // images: [product.image],
                },
                unit_amount: product.price * 100,
            },
            quantity: product.cartQuantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/checkout/success",
            cancel_url: "http://localhost:3000/checkout/fail",
        });

        res.json({ id: session.id })
    }
}

module.exports = orderController;