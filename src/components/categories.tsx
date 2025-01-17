import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
  return (
    <div className="text-gray-600 body-font">
      {/* Header Section */}
      <h1 className="text-black flex justify-center items-center font-extrabold underline bg-pink-800 py-4">
        CATEGORIES
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
        {/* Tops */}
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-2xl mb-4">Tops</h2>
          <Link href="/tops">
            <li className="list-none">
              <Image
                className="mb-3"
                src="/top.jpg"
                alt="Tops"
                width={350}
                height={350}
              />
            </li>
          </Link>
        </div>

        {/* Pants */}
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-2xl mb-4">tops</h2>
          <Link href="/tops">
            <li className="list-none">
              <Image
                className="mb-3"
                src="/toptwo.jpg"
                alt="Pants"
                width={350}
                height={350}
              />
            </li>
          </Link>
        </div>

        {/* Another Pants */}
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-2xl mb-4">Pants</h2>
          <Link href="/pants">
            <li className="list-none">
              <Image
                className="mb-3"
                src="/pant.jpg"
                alt="Pants"
                width={350}
                height={350}
              />
            </li>
          </Link>
        </div>

        {/* More Pants */}
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-2xl mb-4">Pants</h2>
          <Link href="/pants">
            <li className="list-none">
              <Image
                className="mb-3"
                src="/panttwo.jpg"
                alt="Pants"
                width={350}
                height={350}
              />
            </li>
          </Link>
        </div>

        {/* Shoes */}
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-2xl mb-4">Shoes</h2>
          <Link href="/shoes">
            <li className="list-none">
              <Image
                className="mb-3"
                src="/shoes.jpg"
                alt="Shoes"
                width={350}
                height={350}
              />
            </li>
          </Link>
        </div>


        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-2xl mb-4">Accessories</h2>
          <Link href="/accessories">
            <li className="list-none">
              <Image
                className="mb-3"
                src="/purse.jpg"
                alt="Shoes"
                width={350}
                height={350}
              />
            </li>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-2xl mb-4">Accessories</h2>
          <Link href="/accessories">
            <li className="list-none">
              <Image
                className="mb-3"
                src="/ring.jpg"
                alt="Shoes"
                width={350}
                height={350}
              />
            </li>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-2xl mb-4">accessories</h2>
          <Link href="/accessories">
            <li className="list-none">
              <Image
                className="mb-3"
                src="/locket.jpg"
                alt="Shoes"
                width={350}
                height={350}
              />
            </li>
          </Link>
        </div>


        {/* More Shoes */}
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-2xl mb-4">Shoes</h2>
          <Link href="/shoes">
            <li className="list-none">
              <Image
                className="mb-3"
                src="/shoestwo.jpg"
                alt="Shoes"
                width={350}
                height={350}
              />
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
