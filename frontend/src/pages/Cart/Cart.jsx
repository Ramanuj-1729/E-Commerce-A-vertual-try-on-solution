import { ArrowRightOnRectangleIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import CartItem from "../../components/CartItem/CartItem";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='mt-5 mb-10'>
                <Breadcrumb currPage="Cart" />
            </div>

            <div className="mx-12 my-12">
                <div className="mb-12">
                    <h1 className="font-medium text-5xl text-fadeFont">Shopping Cart</h1>
                </div>

                <div>
                    <table className="table-auto w-full border-b-[1px] border-gray">
                        <thead>
                            <tr className="flex items-center justify-between font-normal text-base border-b-[1px] border-gray pb-5">
                                <th className="ml-36">Product</th>
                                <th className="ml-36">Price</th>
                                <th className="ml-4">Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </tbody>
                    </table>

                    <div className="mt-5">
                        <h4 className="font-medium text-xl">Order Summary</h4>

                        <div className="flex items-center justify-between w-full my-10">
                            <div className="space-x-44 border-[1px] border-gray px-5 rounded py-3">
                                <span>Discount</span>
                                <span>$0.00</span>
                            </div>
                            <div className="space-x-44 border-[1px] border-gray px-5 rounded py-3">
                                <span>Delivery</span>
                                <span>$0.00</span>
                            </div>
                            <div className="space-x-44 border-[1px] border-gray px-5 rounded py-3">
                                <span>Subtotal</span>
                                <span>$0.00</span>
                            </div>
                            <div className="space-x-44 border-[1px] border-gray px-5 rounded py-3 font-semibold ">
                                <span>Total</span>
                                <span>$0.00</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <input className="border-2 border-gray px-4 py-3 rounded-l w-72" type="text" placeholder="Please enter coupon code" />
                                <button className="bg-buttonColor px-4 py-3 text-white border-2 border-buttonColor rounded-r">Apply coupon code</button>
                            </div>
                            <div className="flex items-center space-x-5">
                                <button onClick={()=>navigate('/')} className="flex items-center justify-center border-2 border-gray w-72 py-3 rounded">
                                    <ArrowSmallLeftIcon className="w-4 h-4 inline mr-2" />
                                    <span>Continue Shopping</span>
                                </button>
                                <button className="flex items-center justify-center border-2 border-buttonColor w-72 py-3 rounded text-white bg-buttonColor">
                                    <span>Checkout</span>
                                    <ArrowRightOnRectangleIcon className="w-4 h-4 inline ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;