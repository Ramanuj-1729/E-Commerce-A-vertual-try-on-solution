import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function App() {
    SwiperCore.use([Autoplay]);

    return (
        <div className='relative'>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                    modules={[Navigation]}
                    className="mySwiper h-screen"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide><img src="/images/img1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/img2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/img3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/img4.jpg" alt="" /></SwiperSlide>
                </Swiper >
            </div>
            <ChevronLeftIcon className="arrow-left h-8 w-8 absolute z-10 top-1/2 left-5 cursor-pointer text-red bg-gray rounded-full p-2 hover:text-white hover:bg-red">Prev</ChevronLeftIcon>
            <ChevronRightIcon className="arrow-right h-8 w-8 absolute z-10 top-1/2 right-5 cursor-pointer text-red bg-gray rounded-full p-2 hover:text-white hover:bg-red">next</ChevronRightIcon>
        </div>
    );
}
