import React from 'react';

const FeatureBar = () => {
    return (
        <div className='flex items-center justify-center space-x-32 border-t-[1px] border-b-[1px] border-gray mb-12 py-3 mx-12'>
            <div className='flex items-center justify-center space-x-3'>
                <img className='h-10' src="images/delivery-truck.png" alt="" />
                <span className='font-light text-sm'>Free delivery</span>
            </div>
            <div className='flex items-center justify-center space-x-3'>
                <img className='h-8' src="images/box.png" alt="" />
                <span className='font-light text-sm'>Non-contact shipping</span>
            </div>
            <div className='flex items-center justify-center space-x-3'>
                <img className='h-7' src="images/wallet.png" alt="" />
                <span className='font-light text-sm'>Money back guarantee</span>
            </div>
            <div className='flex items-center justify-center space-x-3'>
                <img className='h-7' src="images/secure-shield.png" alt="" />
                <span className='font-light text-sm'>Secure payments</span>
            </div>
        </div>
    );
}

export default FeatureBar;
