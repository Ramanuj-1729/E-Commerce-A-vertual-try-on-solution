import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Cart = ({onCloseClick, toggleCart}) => {
    const products = [
        {
            id: 1,
            name: 'Throwback Hip Bag',
            href: '#',
            color: 'Salmon',
            price: '$90.00',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Medium Stuff Satchel',
            href: '#',
            color: 'Blue',
            price: '$32.00',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
            imageAlt:
                'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        },
        
    ]
    return (
        <div style={toggleCart === true ? {right: '0'} : {right: '-110%'}} className={`fixed top-0 bg-white h-screen z-30 flex items-center flex-col px-8 py-8 duration-500 ease-out ${toggleCart === true ? 'cartSidebarShadow' : ''}`}>
            <div className='flex items-center justify-center border-b-[1px] border-gray space-x-28 pb-5 w-full'>
                <h2 className='font-semibold text-xl'>SHOPPING CART</h2>
                <button onClick={()=>onCloseClick()} className='flex items-center justify-center font-semibold text-lg text-gray'><small>close</small> <ArrowRightIcon className='w-5 h-5 ml-2' /></button>
            </div>
            <div className='my-5 w-full'>
                <div className='mb-5 flow-root overflow-auto max-h-96 pr-3'>
                    <ul className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3 className='hover:text-red transition duration-150 ease-out'>
                                                <a href={product.href}>{product.name}</a>
                                            </h3>
                                            <p className="ml-4">{product.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty {product.quantity}</p>

                                        <div className="flex">
                                            <button
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
                    <span className='font-semibold text-lg'>$841.99</span>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <NavLink onClick={()=>onCloseClick()} to="/cart" className=" font-medium text-2xl border-b-2 border-red pb-2 mb-5">View Cart</NavLink>
                    <button className='bg-black text-white py-3 w-full rounded text-xl font-medium'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;