
import React from 'react'
import Image from 'next/image'
const  Hero = () => {
  return (
    <div> 
<section className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src="/download.jpeg"
        height={900}
        width={900}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Fashion, Jewelry & 
        <br className="hidden lg:inline-block" />
        Footwear Wonderland
      </h1>
      <p className="mb-8 leading-relaxed">
      Discover the ultimate collection of stylish clothes, stunning jewelry, and trendy footwear, all curated for the modern girl! Whether you were looking to update your wardrobe or add the perfect accessory, Girls Choice  offers a variety of styles that cater to every mood and occasion. Explore a world of fashion that celebrates your unique style, where elegance meets comfort, and beauty shines at every step.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-pink-950 border-0 py-2 px-6  focus:outline-none hover:bg-yellow-600 rounded text-lg">
          shop now
        </button>
        
      </div>
    </div>
  </div>
</section>

</div>
  )
}

export default Hero