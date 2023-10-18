import React, { useState, useEffect } from 'react';
import SingleProductCard from '../../components/shared/SingleProductCard/SingleProductCard';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';
import Filters from '../../components/Filters/Filters';
import Pagination from '../../components/shared/Pagination/Pagination';
import { getProducts } from '../../http';

const ProductList = () => {
    const [gridCols, setGridCols] = useState(3);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('Price - high to low');
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleItemPerPage = (event) => {
        setItemsPerPage(event.target.value);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await getProducts();
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchProducts();
    }, []);

    const handleSortByChange = (e) => {
        e.preventDefault();
        setSortBy(e.target.value);
    }

    if (sortBy === 'Alphabetically, A - Z') {
        products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Alphabetically, Z - A') {
        products.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'Price - low to high') {
        products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price - high to low') {
        products.sort((a, b) => b.price - a.price);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

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
                        <Filters products={products} setFilteredProducts={setFilteredProducts} />
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

                                <select id="sortby" className='outline-none' value={sortBy} onChange={handleSortByChange}>
                                    <option value="Alphabetically, A - Z">Alphabetically, A - Z</option>
                                    <option value="Alphabetically, Z - A">Alphabetically, Z - A</option>
                                    <option value="Price - low to high">Price - low to high</option>
                                    <option value="Price - high to low">Price - high to low</option>
                                </select>
                            </div>
                            <div className='flex items-center'>
                                <span className='mr-3 font-light'>Show</span>
                                <select id="show" className='outline-none' value={itemsPerPage} onChange={handleItemPerPage}>
                                    <option value={3}>3</option>
                                    <option value={6}>6</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={12}>12</option>
                                    <option value={14}>14</option>
                                    <option value={15}>15</option>
                                    <option value={16}>16</option>
                                    <option value={20}>20</option>
                                    <option value={24}>24</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <div style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }} className='grid gap-8'>
                            {loading ? <h1>Loading...</h1> :
                                filteredProducts.slice(indexOfFirstItem, indexOfLastItem).map((product) => {
                                    return (
                                        <SingleProductCard key={product._id} product={product} />
                                    )
                                })
                            }
                        </div>
                        <Pagination count={Math.ceil(products.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;