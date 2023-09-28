import { SwiperSlide } from "swiper/react";
import SingleProductCard from '../shared/SingleProductCard/SingleProductCard';
import Slider from "../shared/Slider/Slider";
import { useEffect, useState } from "react";
import { getProducts } from "../../http";

const NewArrivalSlider = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await getProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchUsers();
    }, []);
    return (
        <div className="mb-16">
            <div className="flex items-center justify-center mb-5">
                <h1 className="font-medium text-3xl">New Arrival</h1>
            </div>
            <div className="mx-12">
                <Slider slidesPerView={4} autoPlay={false} spaceBetween={40}>
                    {loading ? <h1>Loading...</h1> :
                        products.map((product) => {
                            return (
                                <SwiperSlide key={product._id}><SingleProductCard product={product} /></SwiperSlide>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default NewArrivalSlider;