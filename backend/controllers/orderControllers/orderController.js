const OrderItem = require('../../models/orderItem');
const Order = require('../../models/order');
const CustomErrorHandler = require('../../services/CustomErrorHandler');

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

        console.log(orderItemsIdsResolved);

        const totalAmounts = await Promise.all(orderItemsIdsResolved.map(async (orderItemId) => {
            const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');
            const totalAmount = orderItem.product.price * orderItem.quantity;

            return totalAmount;
        }));

        const totalAmount= totalAmounts.reduce((a, b) => a + b, 0);

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
    }
}

module.exports = orderController;