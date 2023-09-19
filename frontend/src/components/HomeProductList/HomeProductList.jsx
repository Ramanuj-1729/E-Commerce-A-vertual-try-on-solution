import React, { useEffect, useState } from 'react'
import SingleProductCard from '../shared/SingleProductCard/SingleProductCard';
import { getProducts } from '../../http';

const HomeProductList = () => {
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
        <div className='flex items-center justify-center flex-col mb-12 mx-12'>
            <div className='flex items-center justify-center mb-5'>
                <h1 className='font-medium text-3xl'>Product List</h1>
            </div>
            <div className='grid grid-cols-4 gap-12'>
                {loading ? <h1>Loading...</h1> :
                    products.map((product) => {
                        return (
                            <SingleProductCard key={product._id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HomeProductList;