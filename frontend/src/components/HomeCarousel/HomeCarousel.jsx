import { SwiperSlide } from "swiper/react";
import Slider from "../shared/Slider/Slider";

const HomeCarousel = () => {

    return (
        <Slider slidesPerView={1} sliderClass="h-screen" autoPlay={true} arrowLeftPosition="20px" arrowRightPosition="20px">
            <SwiperSlide><img src="/images/img1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/images/img2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/images/img3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/images/img4.jpg" alt="" /></SwiperSlide>
        </Slider>
    );
}

export default HomeCarousel;
