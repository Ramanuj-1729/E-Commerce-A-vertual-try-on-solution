import React from 'react';

const FeaturedProductsType = ({ image, primaryHeading, secondaryHeading, direction }) => {
    return (
        <div className='flex justify-center items-center' style={{ flexDirection: `${direction === 'left' ? 'column' : 'column-reverse'}` }}>
            <div style={direction === 'left' ? { marginBottom: '1rem' } : { marginTop: '1rem' }} className='flex items-center justify-center bg-gray overflow-hidden rounded-md'>
                <img className='h-80 scale-100 hover:scale-110 ease-in duration-200' src={`/images/${image}.jpg`} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className='font-normal text-2xl'>{secondaryHeading}</span>
                <span className='font-medium text-3xl my-3'>{primaryHeading}</span>
                <button className='bg-red py-1 px-5 rounded-full cursor-pointer font-medium ease-in duration-200 text-white hover:bg-hoverRed'>Shop now</button>
            </div>
        </div>
    );
}

export default FeaturedProductsType;