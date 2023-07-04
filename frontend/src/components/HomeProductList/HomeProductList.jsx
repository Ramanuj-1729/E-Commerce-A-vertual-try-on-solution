import React from 'react'
import SingleProductCard from '../shared/SingleProductCard/SingleProductCard';

const HomeProductList = () => {
    return (
        <div className='flex items-center justify-center flex-col mb-12'>
            <div className='flex items-center justify-center mb-5'>
                <h1 className='font-medium text-3xl'>Product List</h1>
            </div>
            <div className='grid grid-cols-4 gap-12'>
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
            </div>
        </div>
    );
}

export default HomeProductList;