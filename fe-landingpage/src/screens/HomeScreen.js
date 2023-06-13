import React from 'react'
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import FeaturedProducts from '../components/FeaturedProducts.js';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FeaturedProducts />
    </div>
  )
}

export default HomeScreen
