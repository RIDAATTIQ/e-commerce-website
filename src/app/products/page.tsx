import { client } from '@/sanity/lib/client';
import Image from 'next/image';

type product ={
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageUrl: string;
};




const Products = async () => {
  const query = `*[_type == "product"]{
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url // Image URL ko directly fetch karna
  }`;
  const products = await client.fetch(query);

  return (
    <div>
      <h1 className='text 4xl font-bold flex justify-center bg-pink-900'>NEW Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.length > 0 ? (
          products.map((product: product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-lg">
              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src={product.imageUrl} // Image URL
                  alt={product.name}
                  width={300} // Width of image
                  height={300} // Height of image
                  className="rounded-lg"
                />
              </div>

              {/* Heading and Description */}
              <div className="mt-4 space-y-4 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-lg text-gray-600">{product.description}</p>
              </div>

              {/* Price */}
              <p className="mt-4 text-xl font-semibold text-gray-900 text-center">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
