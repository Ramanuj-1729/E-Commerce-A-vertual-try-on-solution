import { SwiperSlide } from "swiper/react";
import Slider from "../shared/Slider/Slider";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewSlider = () => {
    return (
        <div className="mb-16">
            <div className="flex items-center justify-center mb-5">
                <h1 className="font-medium text-3xl">Out customers says</h1>
            </div>
            <div className="mx-12">
                <Slider slidesPerView={4} autoPlay={false} spaceBetween={40}>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                </Slider>
            </div>
        </div>
    );
}

export default ReviewSlider;