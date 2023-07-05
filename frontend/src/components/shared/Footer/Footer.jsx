import { } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='flex items-center justify-between mx-12'>
            <div>
                <div className='flex items-center justify-center space-x-20 mb-10'>
                    <div>
                        <ul className='space-y-4'>
                            <li>Jeans</li>
                            <li>Jacket & Coats</li>
                            <li>Loungewear</li>
                            <li>Polo Shirts</li>
                            <li>Shirts</li>
                            <li>Belts</li>
                        </ul>
                    </div>

                    <div>
                        <ul className='space-y-4'>
                            <li>Shorts</li>
                            <li>Suits</li>
                            <li>Swimwear</li>
                            <li>Tracksuits</li>
                            <li>Trousers</li>
                            <li>T-shirts</li>
                        </ul>
                    </div>

                    <div>
                        <ul className='space-y-4'>
                            <li>My Account</li>
                            <li>Order History</li>
                            <li>Wish List</li>
                            <li>Newsletter</li>
                            <li>Affiliate</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                </div>

                <div className='flex items-center justify-start space-x-8 mb-10'>
                    <img className='h-6' src="images/visa.png" alt="" />
                    <img className='h-6' src="images/mastercard.png" alt="" />
                    <img className='h-6' src="images/maestro.png" alt="" />
                    <img className='h-6' src="images/rupay.png" alt="" />
                </div>

                <span>CHAD © 2021. All Rights Reserved</span>
            </div>

            <div>
                <h1 className='font-medium text-5xl mb-5'>Join our newsletter for free</h1>

                <div className='flex items-center justify-center mb-5'>
                    <input className='border-[1px] border-gray px-5 py-3 rounded-full w-full mr-4' type="text" name="" id="" placeholder='Email address' />
                    <button className='bg-red px-14 py-4 rounded-full text-white font-semibold text-lg hover:bg-hoverRed'>Subscribe</button>
                </div>

                <div>

                </div>
                <div className='space-x-4 flex items-center'>
                    <span className=' font-semibold text-3xl'>(+91) 1234567890</span>
                    <NavLink to="" className='text-xl underline'>info@chad.com</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Footer;