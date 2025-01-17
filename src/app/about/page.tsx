import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-900 bg-pink-900">About Us</h1>
        <p className="mt-4 text-xl text-gray-600">Your One-Stop Shop for Fashionable Clothing, Shoes, and Accessories</p>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Image 
              src="/top.jpg" 
              alt="Clothing" 
              width={300} 
              height={300} 
              className="w-full h-auto object-cover rounded-md shadow-md" 
            />
            <h3 className="text-lg font-medium text-gray-900 mt-4">Stylish Clothing</h3>
            <p className="text-gray-600 mt-2">Discover the latest trends in women's fashion, from dresses to casual wear, we have something for every occasion.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="/shoes.jpg" 
              alt="Shoes" 
              width={300} 
              height={300} 
              className="w-full h-auto object-cover rounded-md shadow-md" 
            />
            <h3 className="text-lg font-medium text-gray-900 mt-4">Elegant Shoes</h3>
            <p className="text-gray-600 mt-2">Step into luxury with our exclusive collection of footwear, perfect for every style and comfort.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="/locket.jpg" 
              alt="Accessories" 
              width={300} 
              height={300} 
              className="w-full h-auto object-cover rounded-md shadow-md" 
            />
            <h3 className="text-lg font-medium text-gray-900 mt-4">Chic Accessories</h3>
            <p className="text-gray-600 mt-2">Complete your outfit with our wide range of accessories, from handbags to jewelry, adding that perfect finishing touch.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">At our store, we are passionate about offering stylish, high-quality products that fit your lifestyle. Our goal is to make fashion accessible to everyone, providing the best shopping experience possible.</p>
          <Link href="/contact">
            <div className="inline-block mt-6 px-6 py-3 text-white bg-pink-900 hover:bg-pink-700 rounded-lg">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
