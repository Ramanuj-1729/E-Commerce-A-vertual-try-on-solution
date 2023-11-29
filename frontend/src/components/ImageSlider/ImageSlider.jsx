import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const sliderStyles = {
    height: "100%",
};

const dotsContainerStyles = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
};

const activeDotStyle = {
    border: "3px solid red",
    borderRadius: "5px",
}

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imgWrapperRef = useRef(null);

    useEffect(() => {
        let imgWrapper = imgWrapperRef.current;

        imgWrapper.addEventListener("mouseenter", (e) => {
            imgWrapper.style.backgroundSize = "145%";
        });

        imgWrapper.addEventListener("mousemove", (e) => {
            imgWrapper.style.backgroundPositionX = -e.offsetX / 2 + "px";
            imgWrapper.style.backgroundPositionY = -e.offsetY / 2 + "px";
        });

        imgWrapper.addEventListener("mouseleave", (e) => {
            imgWrapper.style.backgroundSize = "100%";
            imgWrapper.style.backgroundPositionX = "center";
            imgWrapper.style.backgroundPositionY = "center";
        });
        return () => {
            imgWrapper.removeEventListener("mouseenter", (e) => { });
            imgWrapper.removeEventListener("mousemove", (e) => { });
            imgWrapper.removeEventListener("mouseleave", (e) => { });
        };
    }, []);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${(slides[currentIndex]).replace(/\\/g, "/")})`,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    };

    return (

        <div className="flex items-center" style={sliderStyles} >
            <div className="mr-5" style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div
                        className="space-y-2 cursor-pointer"
                        style={currentIndex === slideIndex ? activeDotStyle : null}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        <img className="w-36" src={slide} alt="" srcSet="" />
                    </div>
                ))}
            </div>

            <div ref={imgWrapperRef} className="flex items-center justify-center relative group overflow-hidden" style={slideStylesWidthBackground}>
                <div className="hidden group-hover:block">
                    <ChevronLeftIcon className="h-8 w-8 absolute z-10 top-1/2 -translate-y-1/2 cursor-pointer text-red bg-gray rounded-full p-2 hover:text-white hover:bg-red left-0" onClick={goToPrevious}>Prev</ChevronLeftIcon>
                    <ChevronRightIcon className="h-8 w-8 absolute z-10 top-1/2 -translate-y-1/2 cursor-pointer text-red bg-gray rounded-full p-2 hover:text-white hover:bg-red right-0" onClick={goToNext}>next</ChevronRightIcon>
                </div>
            </div>

        </div>
    );
};

export default ImageSlider;