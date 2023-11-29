import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';
import Checkbox from '../../components/shared/Checkbox/Checkbox';
import { HeartIcon, MinusSmallIcon, PlusSmallIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { useLocation } from 'react-router-dom';
import { getProduct } from '../../http';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const SingleProduct = () => {

    // const containerStyles = {
    //     height: "100%",
    //     margin: "0 auto",
    // };

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

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await getProduct(path);
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchProduct();
    }, [path]);

    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(product));
    }
    return (
        <>
            <div className='my-5'>
                <Breadcrumb currPage="Single Product" />
            </div>

            <div className='flex mb-10 mx-12'>
                <div className='basis-7/12'>
                    {product.images && <ImageSlider slides={product.images} />}
                </div>

                <div className='basis-5/12 flex flex-col p-6'>
                    <span className='font-medium text-sm text-fadeFont'>{product.brand}</span>
                    <h2 className='font-semibold text-3xl my-4'>{product.name}</h2>
                    <div className='flex items-center space-x-5 mb-4'>
                        <div className='flex items-center space-x-2'>
                            {product.rating && [...Array(product.rating).keys()].map((_, index) => (
                                <StarIcon key={index} className='w-5 h-5 fill-black' />
                            ))}
                            {product.rating && [...Array(5 - product.rating).keys()].map((_, index) => (
                                <StarIcon key={index} className='w-5 h-5' />
                            ))}
                        </div>
                        <button>Write a review</button>
                    </div>
                    <div className='flex items-center space-x-10'>
                        <span>Availability</span>
                        {product.countInStock > 0 ? <span className='text-green'>In Stock</span> : <span className='text-red'>Out of Stock</span>}
                    </div>
                    <div className='font-semibold text-red text-4xl my-4'>₹ {product.price}</div>
                    <div className='mb-4'>
                        <span className='font-medium'>Color</span>
                        <div className='mt-2'>
                            <div className='flex space-x-3'>
                                {product.colors && product.colors.map((color, index) => (
                                    <div key={index} className=' border-[3px] p-[3px] cursor-pointer rounded-full'>
                                        <div style={{ backgroundColor: color }} className={`h-6 w-6 rounded-full`}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <span className='font-medium'>Size</span>
                        <div className='space-x-5 mt-2'>
                            {product.sizes && product.sizes.map((size, index) => (
                                <span key={index} className='border-[1px] py-1 px-5 rounded-full'>{size}</span>
                            ))}
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
                            <button onClick={handleAddToCart} className='flex items-center justify-center space-x-2 bg-buttonColor text-white py-3 px-24 rounded text-xl'>
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