import React from 'react'
import Hero from '../components/hero'
import Service from '@/components/services'
import Promotions from '@/components/promotions'
import Categories from '@/components/categories'
import Bestselling from '@/components/bestselling'
import FeaturedProduct from '@/components/featuredProduct'
import Products from './products/page'




const Homepage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <Service />
      <Promotions />
      <Categories />
      <Bestselling />
      <Products/>
    </div>
  )
}

export default Homepage