import React from 'react'
import FeaturedProductsType from './FeaturedProductsType/FeaturedProductsType';

const FeaturedProducts = () => {
  return (
    <div className='flex items-center justify-center space-x-14 mb-16'>
      <FeaturedProductsType image="img6" primaryHeading="Always trendy red" secondaryHeading="Bestsellers" direction="left" />
      <FeaturedProductsType image="img7" primaryHeading="Color of the year" secondaryHeading="New Arrival" direction="right" />
    </div>
  );
}

export default FeaturedProducts;