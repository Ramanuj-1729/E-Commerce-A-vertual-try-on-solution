import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetColorName } from 'hex-color-to-color-name';
import { removeFromCart } from '../../store/cartSlice';
import { loadStripe } from '@stripe/stripe-js';
import { checkoutSession } from '../../http';


const Cart = ({ onCloseClick, toggleCart }) => {
    const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector((state) => state.cartSlice);
    const { isAuth } = useSelector((state) => state.authSlice);
    const PF = 'http://localhost:5000/';
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleCheckout = async () => {
        const stripe = await loadStripe('pk_test_51NdqtISEDKkoqmSTm8m11oENLJBcHTeW2J19LpumcOsP88Jl4uPAEA3rB7AeWi9RuJ4g85Apdv3dwoJc4fjvph3j00J6NUZ0so');

        try {
            const { data } = await checkoutSession(cartItems);

            try {
                const result = stripe.redirectToCheckout({
                    sessionId: data.id
                });
    
                // if (result.error) {
                //     console.log(result.error);
                // }
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
    return (
        <div style={toggleCart === true ? { right: '0' } : { right: '-110%' }} className={`fixed top-0 bg-white h-screen z-30 flex items-center flex-col px-8 py-8 duration-500 ease-out ${toggleCart === true ? 'cartSidebarShadow' : ''}`}>
            <div className='flex items-center justify-center border-b-[1px] border-gray space-x-28 pb-5 w-full'>
                <h2 className='font-semibold text-xl'>SHOPPING CART</h2>
                <button onClick={() => onCloseClick()} className='flex items-center justify-center font-semibold text-lg text-gray'><small>close</small> <ArrowRightIcon className='w-5 h-5 ml-2' /></button>
            </div>
            {
                cartTotalQuantity === 0 ? <h2 className='text-base font-normal mt-5'>Your cart is currently empty.</h2>
                    :
                    <div className='my-5 w-full'>
                        <div className='mb-5 flow-root overflow-auto max-h-96 pr-3'>
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map((product) => (
                                    <li key={product._id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={PF + product.image}
                                                alt="product"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3 className='hover:text-red transition duration-150 ease-out'>
                                                        <NavLink to="#">{product.name}</NavLink>
                                                    </h3>
                                                    <p className="ml-4">{product.price}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{GetColorName(product.colors[0])}</p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">Qty {product.cartQuantity}</p>

                                                <div className="flex">
                                                    <button
                                                        onClick={() => handleRemoveFromCart(product)}
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center justify-between border-t-[1px] border-b-[1px] border-gray py-2 mb-10'>
                            <span className='font-medium'>Subtotal</span>
                            <span className='font-semibold text-lg'>₹ {cartTotalAmount}</span>
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <NavLink onClick={() => onCloseClick()} to="/cart" className=" font-medium text-2xl border-b-2 border-red pb-2 mb-5">View Cart</NavLink>
                            {
                                isAuth
                                    ?
                                    <button onClick={handleCheckout} className='bg-black text-white py-3 w-full rounded text-xl font-medium'>Checkout</button>
                                    :
                                    <button onClick={() => { navigate('/account/login'); onCloseClick(); }} className='bg-black text-white py-3 w-full rounded text-xl font-medium'>Login to Checkout</button>
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default Cart;