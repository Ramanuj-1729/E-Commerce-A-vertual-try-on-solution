import React from 'react';

const NavCategories = ({image, category}) => {
    return (
        <div className='flex items-center flex-col py-5'>
            <div className='rounded-full bg-[#d2d2d2] overflow-hidden mb-3 cursor-pointer'>
                <span className='bg-[#e7e1e1] p-10 rounded-full relative flex justify-center w-40 h-40 hover:origin-bottom hover:-rotate-12 duration-500 hover:transition hover:duration-500'>
                    <img className='absolute bottom-0 h-32' src={`/images/${image}.png`} alt="category" />
                </span>
            </div>
            <span className='font-medium text-lg text-fadeFont cursor-pointer'>{category}</span>
        </div>
    );
}

export default NavCategories;