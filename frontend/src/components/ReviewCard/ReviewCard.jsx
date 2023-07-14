import React from 'react';

const ReviewCard = () => {
    return (
        <div className='relative border-2 border-gray rounded-md my-5'>
            <div className='flex items-center justify-center flex-col py-5 px-10 text-justify'>
                <p className='mb-4 font-medium'>“This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writting a text here”</p>
                <span className='font-medium text-gray'>Ketan Sarna</span>
            </div>
            <span className='absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray p-2 rounded-full'>
                <img className='h-5' src="images/twitter.svg" alt="" />
            </span>
        </div>
    );
}

export default ReviewCard;