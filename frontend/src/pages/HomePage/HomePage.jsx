import HomeSlider from '../../components/HomeSlider/HomeSlider';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import NewArrivalSlider from '../../components/NewArrivalSlider/NewArrivalSlider';
import HomeProductList from '../../components/HomeProductList/HomeProductList';
import ReviewSlider from '../../components/ReviewSlider/ReviewSlider';

const HomePage = () => {

    return (
        <>
            <section>
                <HomeSlider />
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
                <ReviewSlider />
            </section>
        </>
    );
}

export default HomePage;