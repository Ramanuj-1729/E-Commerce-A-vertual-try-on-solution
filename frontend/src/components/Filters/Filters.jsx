import React, { useState, useEffect } from 'react';
import FilterTemplate from './FilterTemplate/FilterTemplate';
import Slider from '@mui/material/Slider';
import CheckboxFilter from './CheckboxFilter/CheckboxFilter';
import { getCategories } from '../../http';

const Filters = ({ products }) => {
    // console.log(products);
    const [value, setValue] = useState([0, 10000]);

    const handleChange = (event, newPrice) => {
        setValue(newPrice);
    };
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [brands, setBrands] = useState({});
    const [sizes, setSizes] = useState({});
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await getCategories();
                setCategories(data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        const brandCounts = products.reduce((acc, product) => {
            acc[product.brand] = (acc[product.brand] || 0) + 1;
            return acc;
        }, {});
        setBrands(brandCounts);
        const sizesWithCounts = products.flatMap(product => product.sizes).reduce((acc, size) => {
            acc[size] = (acc[size] || 0) + 1;
            return acc;
        }, {});
        setSizes(sizesWithCounts);
    }, [products]);

    const brandKeys = Object.keys(brands);
    const brandValues = Object.values(brands);

    const sizeKeys = Object.keys(sizes);
    const sizeValues = Object.values(sizes);
    return (
        <div className='w-80'>
            <FilterTemplate heading="All Categories">
                <ul className='space-y-2 font-medium text-lg'>
                    {loading ? <h1>Loading...</h1> :
                        categories.map((category) => {
                            return (
                                <li key={category._id}>{category.name}</li>
                            )
                        })
                    }
                </ul>
            </FilterTemplate>

            <FilterTemplate heading="Colors">
                <div className='grid grid-cols-7 gap-3'>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[red] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[yellow] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[green] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[gray] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[brown] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[pink] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[white] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[blue] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[orange] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[purple] rounded-full'></div>
                    </div>
                    <div className='bg-[#dee0df] border-[3px] p-[3px] cursor-pointer rounded-full'>
                        <div className='h-6 w-6 bg-[cyan] rounded-full'></div>
                    </div>
                </div>
            </FilterTemplate>

            <FilterTemplate heading="Price">
                <div className='px-3'>
                    <Slider
                        sx={{
                            color: '#000000',
                        }}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby='range-slider'
                        // getAriaValueText={0}
                        min={0}
                        max={10000}
                    />
                </div>
                <div className='flex items-center justify-between mt-5'>
                    <button className='bg-white border-[3px] rounded-sm border-black px-4 py-[6px] text-lg hover:bg-black hover:text-white transition duration-200 ease-out'>Filter</button>
                    <span className='font-medium'>$ {value[0]}  -  $ {value[1]}</span>
                </div>
            </FilterTemplate>

            <FilterTemplate heading="Size">
                {sizeKeys.map((size, index) => {
                    return (
                        <CheckboxFilter key={index} label={size} value={sizeValues[index]} />
                    );
                })}
            </FilterTemplate>

            <FilterTemplate heading="Brand">
                {brandKeys.map((brand, index) => {
                    return (
                        <CheckboxFilter key={index} label={brand} value={brandValues[index]} />
                    );
                })}
            </FilterTemplate>
        </div>
    );
}

export default Filters;