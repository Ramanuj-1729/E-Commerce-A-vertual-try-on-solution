import { NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, HeartIcon, MagnifyingGlassIcon, StarIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart, getTotals } from '../../../store/cartSlice';

const SingleProductCard = ({ product }) => {
    const PF = 'http://localhost:5000/';
    const [mainImage, setMainImage] = useState(product?.image);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartSlice);
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(product));
    }
    return (
        <div className='group'>
            <NavLink to={`/collections/${product._id}`} >
                <div className='relative mb-3'>
                    <div className='flex items-center justify-center bg-gray cursor-pointer aspect-h-1 aspect-w-1 overflow-hidden'>
                        <img className=' h-[420px] w-full object-cover object-center' src={PF + mainImage} alt="" />
                    </div>
                    <span className='absolute top-3 left-3 bg-white rounded-xl text-xs py-1 px-2 font-medium'>20% OFF</span>
                    <div className='absolute top-2 right-2 hidden flex-col space-y-1 group-hover:flex'>
                        <button className='bg-white rounded-full p-1 hover:bg-black hover:text-white duration-200 ease-in'><HeartIcon className='h-6 w-6' /></button>
                        <button className='bg-white rounded-full p-1 hover:bg-black hover:text-white duration-200 ease-in'><Bars3BottomRightIcon className='h-6 w-6 rotate-90' /></button>
                        <button className='bg-white rounded-full p-1 hover:bg-black hover:text-white duration-200 ease-in'><MagnifyingGlassIcon className='h-6 w-6' /></button>
                    </div>
                    <button onClick={handleAddToCart} className='absolute bottom-0 bg-black w-full text-white py-3 hidden group-hover:block duration-200 ease-in'>Add to cart</button>
                </div>
            </NavLink>

            <span><NavLink to={`/collections/${product._id}`}>{product?.name}</NavLink></span>

            <div className='my-2'>
                <span className='text-lg mr-4'>₹ {product?.price} </span>
                <span className='text-lg text-gray line-through'>₹ 122.00</span>
            </div>

            <span className='flex items-center space-x-1'>
                {product.rating && [...Array(product.rating).keys()].map((_, index) => (
                    <StarIcon key={index} className='w-4 h-4 fill-black' />
                ))}
                {product.rating && [...Array(5 - product.rating).keys()].map((_, index) => (
                    <StarIcon key={index} className='w-4 h-4' />
                ))}
            </span>

            <div className='flex items-center space-x-2 mt-2'>
                {
                    product?.images?.map((image, index) => {
                        return (
                            <button onClick={()=>setMainImage(image)} key={index} className='h-8 w-8 bg-gray rounded-full flex items-center justify-center overflow-hidden'>
                                <img className='h-8' src={PF + image} alt="" />
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SingleProductCard;