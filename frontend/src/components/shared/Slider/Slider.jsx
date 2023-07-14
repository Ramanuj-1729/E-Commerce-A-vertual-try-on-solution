import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const Slider = ({ slidesPerView, sliderClass, autoPlay, children, spaceBetween, arrowLeftPosition, arrowRightPosition }) => {
    return (
        <div className='relative'>
            <div>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    loop={true}
                    navigation={{ nextEl: "#arrow-left", prevEl: "#arrow-right" }}
                    modules={[Navigation, Autoplay]}
                    className={`mySwiper ${sliderClass}`}
                    autoplay={autoPlay ? {
                        delay: 5000,
                        disableOnInteraction: false,
                    } : false}
                >
                    {children}
                </Swiper >
            </div>
            <ChevronLeftIcon id="arrow-left" className="h-8 w-8 absolute z-10 top-1/2 -translate-y-1/2 cursor-pointer text-red bg-gray rounded-full p-2 hover:text-white hover:bg-red -left-10" style={{left: arrowLeftPosition}} >Prev</ChevronLeftIcon>
            <ChevronRightIcon id="arrow-right" className="h-8 w-8 absolute z-10 top-1/2 -translate-y-1/2 cursor-pointer text-red bg-gray rounded-full p-2 hover:text-white hover:bg-red -right-10" style={{right: arrowRightPosition}} >next</ChevronRightIcon>
        </div>
    );
}

export default Slider;