import React, { useState } from 'react';
import FilterTemplate from './FilterTemplate/FilterTemplate';
import Slider from '@mui/material/Slider';
import CheckboxFilter from './CheckboxFilter/CheckboxFilter';

const Filters = () => {
    const [value, setValue] = useState([0, 10000]);

    const handleChange = (event, newPrice) => {
        setValue(newPrice);
    };
    return (
        <div className='w-80'>
            <FilterTemplate heading="All Categories">
                <ul className='space-y-2 font-medium text-lg'>
                    <li>Jeans</li>
                    <li>Suits</li>
                    <li>T-Shirts</li>
                    <li>Jeans</li>
                    <li>Jeans</li>
                </ul>
            </FilterTemplate>

            <FilterTemplate heading="Colors">
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
                        getAriaValueText={0}
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
                <CheckboxFilter label="S" value="5" />
                <CheckboxFilter label="M" value="2" />
                <CheckboxFilter label="L" value="2" />
            </FilterTemplate>

            <FilterTemplate heading="Brand">
                <CheckboxFilter label="Canon" value="5" />
                <CheckboxFilter label="Vendor" value="2" />
                <CheckboxFilter label="Chad Boxed" value="2" />
            </FilterTemplate>
        </div>
    );
}

export default Filters;