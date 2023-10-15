import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, UserIcon, HeartIcon, ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Dropdown from '../../Dropdown/Dropdown';
import NavCategories from '../../NavCategories/NavCategories';
import Cart from '../../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuth, user } = useSelector(state => state.authSlice);
    const { cartTotalQuantity } = useSelector(state => state.cartSlice);
    const [toggleCart, setToggleCart] = useState(false);
    const onCartClick = () => {
        setToggleCart(current => !current);
    }

    return (
        // style={{ position: 'fixed', width: '100%', top: '0' }}
        <nav className="bg-white border-gray-200 dark:bg-gray-900 z-20 ">
            <Cart onCloseClick={onCartClick} toggleCart={toggleCart} />
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-6 px-12 relative">
                <NavLink className="pb-6" to="/">
                    <img src="/images/chad_logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
                </NavLink>

                <div className="flex items-center md:order-2">
                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 group'>
                            <button onClick={() => navigate('/collections/all')} className='flex items-center pb-6'>Shop<ChevronDownIcon className='h-4 w-4' /></button>
                            <div className='overflow-hidden'>
                                <Dropdown>
                                    <div className='flex justify-center space-x-40 my-5'>
                                        <div className='flex flex-col'>
                                            <h4 className=" font-medium text-gray text-lg mb-4">Men</h4>

                                            <div className='flex space-x-14'>
                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Jacket & Coats</li>
                                                        <li>Suits</li>
                                                        <li>Jeans</li>
                                                        <li>Swimwear</li>
                                                        <li>Loungewear</li>
                                                        <li>T-Shirts</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Polo shirts</li>
                                                        <li>Tracksuits</li>
                                                        <li>Shirts</li>
                                                        <li>Trousers</li>
                                                        <li>shorts</li>
                                                        <li>Underwear</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col'>
                                            <h4 className=" font-medium text-gray text-lg mb-4">Women</h4>

                                            <div className='flex space-x-14'>
                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Coats & Jackets</li>
                                                        <li>Dresses</li>
                                                        <li>Jeans</li>
                                                        <li>Lingerie</li>
                                                        <li>Loungewear</li>
                                                        <li>shorts</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Skirts</li>
                                                        <li>Suits</li>
                                                        <li>Swimwear</li>
                                                        <li>Tops</li>
                                                        <li>Trousers</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col'>
                                            <h4 className=" font-medium text-gray text-lg mb-4">Others</h4>

                                            <div className='flex space-x-14'>
                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Accessories</li>
                                                        <li>Bags</li>
                                                        <li>Belts</li>
                                                        <li>Hats</li>
                                                        <li>Watches</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Sale</li>
                                                        <li>Vintage</li>
                                                        <li>Designers</li>
                                                        <li>Lifestyle</li>
                                                        <li>Jewellery</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>

                        <div className='flex items-center space-x-1 group'>
                            <button className='flex items-center pb-6'>Categories<ChevronDownIcon className='h-4 w-4' /></button>
                            <div>
                                <Dropdown>
                                    <div className='flex items-center justify-center space-x-14'>
                                        <NavCategories image="cat-1" category="Women" />
                                        <NavCategories image="cat-2" category="Men" />
                                        <NavCategories image="cat-3" category="Shoes" />
                                        <NavCategories image="cat-4" category="Bags" />
                                        <NavCategories image="cat-5" category="Glasses" />
                                    </div>
                                </Dropdown>
                            </div>
                        </div>

                        <div className='flex items-center space-x-1 group'>
                            <button className='flex items-center pb-6'>Men<ChevronDownIcon className='h-4 w-4' /></button>
                            <div className='overflow-hidden'>
                                <Dropdown>
                                    <div className='ml-10 space-x-40 my-5'>
                                        <div className='flex flex-col'>
                                            <h4 className=" font-medium text-gray text-lg mb-4">Men</h4>

                                            <div className='flex space-x-14'>
                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Jacket & Coats</li>
                                                        <li>Suits</li>
                                                        <li>Jeans</li>
                                                        <li>Swimwear</li>
                                                        <li>Loungewear</li>
                                                        <li>T-Shirts</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Polo shirts</li>
                                                        <li>Tracksuits</li>
                                                        <li>Shirts</li>
                                                        <li>Trousers</li>
                                                        <li>shorts</li>
                                                        <li>Underwear</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>

                        <NavLink to="" className='flex items-center space-x-1 group'>
                            <button className='flex items-center pb-6'>Women<ChevronDownIcon className='h-4 w-4' /></button>
                            <div className='overflow-hidden'>
                                <Dropdown>
                                    <div className='ml-10 space-x-40 my-5'>
                                        <div className='flex flex-col'>
                                            <h4 className=" font-medium text-gray text-lg mb-4">Women</h4>

                                            <div className='flex space-x-14'>
                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Coats & Jackets</li>
                                                        <li>Dresses</li>
                                                        <li>Jeans</li>
                                                        <li>Lingerie</li>
                                                        <li>Loungewear</li>
                                                        <li>shorts</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className='space-y-5'>
                                                        <li>Skirts</li>
                                                        <li>Suits</li>
                                                        <li>Swimwear</li>
                                                        <li>Tops</li>
                                                        <li>Trousers</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                        </NavLink>

                        <NavLink to="" className='flex items-center space-x-1 pb-6'>Blog</NavLink>
                        <NavLink to="" className='flex items-center space-x-1 pb-6'>Contact</NavLink>
                    </div>
                </div>

                <div>
                    <ul className='flex items-center space-x-5'>
                        <li className='pb-6'><MagnifyingGlassIcon className='h-6 w-6 cursor-pointer' /></li>
                        <li onClick={isAuth ? () => navigate(`/account/${user}`) : () => navigate('/account/login')} className='pb-6'><UserIcon className='h-6 w-6 cursor-pointer' /></li>
                        <li onClick={() => navigate('/wishlist')} className='pb-6'><HeartIcon className='h-6 w-6 cursor-pointer' /></li>
                        <li className='relative cursor-pointer pb-6'>
                            <div onClick={() => onCartClick()}>
                                <span><ShoppingCartIcon className='h-6 w-6' /></span>
                                <span className='flex p-2 items-center justify-center absolute -top-1 left-4 text-xs text-center text-white bg-black font-medium border-black rounded-full w-3 h-3'>
                                    <span>{cartTotalQuantity}</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;