import React, { useState, useEffect } from 'react';
import SingleProductCard from '../../components/shared/SingleProductCard/SingleProductCard';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Filters from '../../components/Filters/Filters';
import Pagination from '../../components/shared/Pagination/Pagination';
import { getProducts } from '../../http';

const ProductList = () => {
    const [gridCols, setGridCols] = useState(3);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await getProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchUsers();
    }, []);
    return (
        <div className='mt-4 mb-10'>
            <div className='mt-5 mb-10'>
                <Breadcrumb currPage="Products" />
            </div>
            <div className='mx-12 flex'>
                <div className='flex flex-col mr-10'>
                    <div className='flex items-center justify-between mb-10'>
                        <h1 className='font-semibold text-4xl'>Products</h1>
                    </div>
                    <div>
                        <Filters />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between mb-10 mt-4'>
                        <div className='flex items-center space-x-5'>
                            <img onClick={() => setGridCols(1)} className='h-6 w-6 opacity-50 hover:opacity-100 cursor-pointer' src="/images/grid1.png" alt="" />
                            <img onClick={() => setGridCols(2)} className='h-6 w-6 opacity-50 hover:opacity-100 cursor-pointer' src="/images/grid2.png" alt="" />
                            <img onClick={() => setGridCols(3)} className='h-6 w-6 opacity-50 hover:opacity-100 cursor-pointer' src="/images/grid3.png" alt="" />
                            <img onClick={() => setGridCols(4)} className='h-6 w-6 opacity-50 hover:opacity-100 cursor-pointer' src="/images/grid4.png" alt="" />
                        </div>
                        <div className='flex space-x-5 items-center'>
                            <div className='flex items-center'>
                                <span className='mr-3 font-light'>Sort by</span>
                                <span>Alphabetically, A - Z</span>
                                <ChevronDownIcon className='h-4 w-4' />
                            </div>
                            <div className='flex items-center'>
                                <span className='mr-3 font-light'>Show</span>
                                <span>12</span>
                                <ChevronDownIcon className='h-4 w-4' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <div style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }} className='grid gap-8'>
                            {loading ? <h1>Loading...</h1> :
                                products.map((product) => {
                                    return (
                                        <SingleProductCard key={product._id} product={product} />
                                    )
                                })
                            }
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;