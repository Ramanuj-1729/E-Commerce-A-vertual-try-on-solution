import React from 'react';
import SingleProductCard from '../../components/shared/SingleProductCard/SingleProductCard';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';

const ProductList = () => {
    return (
        <div className='mx-12'>
            <Breadcrumb />
            <div className=''>
                <h1 className=' font-semibold text-5xl mb-10'>Products</h1>
                <div className='grid grid-cols-4 gap-5'>
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
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
        </div>
    );
}

export default ProductList;