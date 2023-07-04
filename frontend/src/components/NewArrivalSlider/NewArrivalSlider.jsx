import { SwiperSlide } from "swiper/react";
import SingleProductCard from '../shared/SingleProductCard/SingleProductCard';
import Slider from "../shared/Slider/Slider";

const NewArrivalSlider = () => {
    return (
        <div className="mb-16">
            <div className="flex items-center justify-center mb-5">
                <h1 className="font-medium text-3xl">New Arrival</h1>
            </div>
            <div className="ml-12">
                <Slider slidesPerView={4} autoPlay={false} arrowLeftPosition="-35px" arrowRightPosition="12px">
                    <SwiperSlide><SingleProductCard /></SwiperSlide>
                    <SwiperSlide><SingleProductCard /></SwiperSlide>
                    <SwiperSlide><SingleProductCard /></SwiperSlide>
                    <SwiperSlide><SingleProductCard /></SwiperSlide>
                    <SwiperSlide><SingleProductCard /></SwiperSlide>
                </Slider>
            </div>
        </div>
    );
}

export default NewArrivalSlider;