import { useState } from 'react';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';
import Checkbox from '../../components/shared/Checkbox/Checkbox';
import { HeartIcon, MinusSmallIcon, PlusSmallIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const SingleProduct = () => {
    const slides = [
        { url: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg", title: "beach" },
        { url: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg", title: "boat" },
        { url: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg", title: "forest" },
        { url: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg", title: "city" },
        { url: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg", title: "italy" },
    ];

    const containerStyles = {
        height: "100%",
        margin: "0 auto",
    };

    const [qty, setQty] = useState(1);

    const handleQty = (type) => {
        if (type === 'increment') {
            setQty(prevQty => prevQty + 1);
        } else {
            if (qty >= 2) {
                setQty(prevQty => prevQty - 1);
            }
        }
    }
    return (
        <>
            <div className='my-5'>
                <Breadcrumb currPage="Single Product" />
            </div>

            <div className='flex mb-10 mx-12'>
                <div className='basis-7/12'>
                    <div style={containerStyles}>
                        <ImageSlider slides={slides} />
                    </div>
                </div>

                <div className='basis-5/12 flex flex-col p-6'>
                    <span className='font-medium text-sm text-fadeFont'>Canon</span>
                    <h2 className='font-semibold text-3xl my-4'>Apple Cinema 30</h2>
                    <div className='flex items-center space-x-5 mb-4'>
                        <div className='flex items-center space-x-2'>
                            <StarIcon className='w-5 h-5' />
                            <StarIcon className='w-5 h-5' />
                            <StarIcon className='w-5 h-5' />
                            <StarIcon className='w-5 h-5' />
                            <StarIcon className='w-5 h-5' />
                        </div>
                        <button>Write a review</button>
                    </div>
                    <div className='flex items-center space-x-10'>
                        <span>Availability</span>
                        <span className='font-medium'>In Stock</span>
                    </div>
                    <div className='font-semibold text-red text-4xl my-4'>$146.00</div>
                    <div className='mb-4'>
                        <span className='font-medium'>Color</span>
                        <div className='mt-2'>
                            <div className='flex space-x-3'>
                                <div className=' border-[3px] p-[3px] cursor-pointer rounded-full'>
                                    <div className='h-6 w-6 bg-black rounded-full'></div>
                                </div>
                                <div className=' border-[3px] p-[3px] cursor-pointer rounded-full'>
                                    <div className='h-6 w-6 bg-black rounded-full'></div>
                                </div>
                                <div className=' border-[3px] p-[3px] cursor-pointer rounded-full'>
                                    <div className='h-6 w-6 bg-black rounded-full'></div>
                                </div>
                                <div className=' border-[3px] p-[3px] cursor-pointer rounded-full'>
                                    <div className='h-6 w-6 bg-black rounded-full'></div>
                                </div>
                                <div className=' border-[3px] p-[3px] cursor-pointer rounded-full'>
                                    <div className='h-6 w-6 bg-black rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <span className='font-medium'>Size</span>
                        <div className='space-x-5 mt-2'>
                            <span className='border-[1px] py-1 px-5 rounded-full'>S</span>
                            <span className='border-[1px] py-1 px-5 rounded-full'>M</span>
                            <span className='border-[1px] py-1 px-5 rounded-full'>L</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <span className='font-medium'>Quantity</span>
                        <div className='mt-2 flex items-center space-x-20'>
                            <div className="flex items-center border-[1px] border-gray rounded-full space-x-5 p-2 w-fit">
                                <MinusSmallIcon onClick={() => handleQty('decrement')} className="w-6 h-6 cursor-pointer" />
                                <span className="font-medium text-lg">{qty}</span>
                                <PlusSmallIcon onClick={() => handleQty('increment')} className="w-6 h-6 cursor-pointer" />
                            </div>
                            <button className='flex items-center justify-center space-x-2 bg-buttonColor text-white py-3 px-24 rounded text-xl'>
                                <ShoppingCartIcon className='w-6 h-6' />
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center my-5'>
                        <Checkbox color="black" />
                        <small className='text-sm font-medium'>I agree with the Terms & Conditions</small>
                    </div>
                    <button className='border-[1px] py-3 px-32 rounded text-buttonColor font-medium text-xl'>But it now</button>
                    <div className='flex items-center space-x-3 my-5 cursor-pointer hover:text-red'>
                        <HeartIcon className='w-6 h-6' />
                        <span>Add to Wishlist</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;