import React from 'react';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import NewArrivalSlider from '../../components/NewArrivalSlider/NewArrivalSlider';
import HomeProductList from '../../components/HomeProductList/HomeProductList';
import FeatureBar from '../../components/FeatureBar/FeatureBar';

const HomePage = () => {
    return (
        <>
            <section>
                <HomeCarousel />
            </section>

            <section>
                <CategoryBar />
            </section>

            <section>
                <FeaturedProducts />
            </section>

            <section>
                <NewArrivalSlider />
            </section>

            <section>
                <HomeProductList />
            </section>

            <section>
                <FeatureBar />
            </section>
            
        </>
    );
}

export default HomePage;