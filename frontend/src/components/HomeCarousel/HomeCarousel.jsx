import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect, useCallback } from 'react';

const HomeCarousel = () => {
    let [scrollLeftValue, setScrollLeftValue] = useState(0);
    const carouselRef = useRef(null);
    let numberOfImage = 4;

    const slideLeft = () => {
        let scrollWidth = carouselRef.current.clientWidth;
        setScrollLeftValue(scrollLeftValue = scrollLeftValue - scrollWidth);
        if (scrollLeftValue < 0) {
            setScrollLeftValue(scrollLeftValue = (scrollWidth * (numberOfImage)));
        }
        carouselRef.current.scrollLeft = scrollLeftValue;
    }


    const slideRight = useCallback(() => {
        let scrollWidth = carouselRef.current.clientWidth;
        setScrollLeftValue(scrollLeftValue = scrollLeftValue + scrollWidth);
        if (scrollLeftValue > scrollWidth * (numberOfImage - 1)) {
            setScrollLeftValue(scrollLeftValue = 0);
        }
        carouselRef.current.scrollLeft = scrollLeftValue;
    }, [numberOfImage, scrollLeftValue])

    useEffect(() => {
        setInterval(() => {
            slideRight();
        }, 7000);
    }, [slideRight]);



    useEffect(() => {
        carouselRef.current.scrollTop = 0;
    }, [])


    return (
        <div className="wrapper flex relative max-w-full mx-auto my-0">
            <ChevronLeftIcon onClick={() => { slideLeft(); }} className='h-6 w-6 absolute top-1/2 left-5 cursor-pointer text-center bg-white rounded-full' />
            <div ref={carouselRef} className="carousel whitespace-nowrap flex aspect-video overflow-x-auto snap-x snap-mandatory scroll-smooth" id="scroll-bar-none">
                <img className="grow shrink-0 basis-full snap-start object-cover select-none" src="/images/img1.jpg" alt="img1" />
                <img className="grow shrink-0 basis-full snap-start object-cover select-none" src="/images/img2.jpg" alt="img1" />
                <img className="grow shrink-0 basis-full snap-start object-cover select-none" src="/images/img3.jpg" alt="img1" />
                <img className="grow shrink-0 basis-full snap-start object-cover select-none" src="/images/img4.jpg" alt="img1" />
            </div>
            <ChevronRightIcon onClick={() => { slideRight(); }} className='h-6 w-6 absolute top-1/2 right-5 cursor-pointer text-center bg-white rounded-full' />
        </div>
    );
}

export default HomeCarousel;