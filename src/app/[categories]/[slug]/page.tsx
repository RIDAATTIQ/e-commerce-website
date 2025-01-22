import { ShoppingCart } from "lucide-react";
import React from "react";
import SlugComponent from "@/components/slugComponent";

const Slug = () => {
  return (
    <div className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Left Section: Image */}
          <div className=" object-cover max-w-screen-md lg:w-1/2 flex-shrink-0">
            <SlugComponent />
          </div>

          {/* Right Section: Content */}
          <div className="w-full lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              STYLISH TOPS
            </h2>
            <h1 className="text-gray-900 text-2xl sm:text-3xl title-font font-medium mb-4">
              THE BEAUTIFUL TOPS,ACCESSORIES & SHOES ITEMS
            </h1>
            <div className="flex items-center mb-4">
              <span className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-pink-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-pink-900"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-2">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed text-base sm:text-lg mb-4">
              Discover the perfect blend of comfort and style with our exclusive
              ladies tops. Designed to suit every occasion, these trendy and
              versatile pieces offer a flattering fit and premium quality
              fabric. Elevate your wardrobe with effortless elegance
            </p>
            <div className="flex flex-col sm:flex-row items-center border-b-2 border-gray-200 pb-4 mb-6">
              <div className="flex items-center mb-4 sm:mb-0">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-purple-900 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-pink-900 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex items-center sm:ml-6">
                <span className="mr-3">Size</span>
                <select className="rounded border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-900">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-medium text-gray-900">$58.00</span>
    <button    className="flex ml-auto bg-pink-900 text-white py-2 px-6 rounded focus:outline-none hover:bg-pink-700">        Add to cart
              </button>
              <button className="w-10 h-10 bg-gray-200 ml-4 flex items-center justify-center rounded-full text-gray-500">
                <ShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slug;
