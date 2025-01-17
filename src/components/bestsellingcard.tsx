import Image from "next/image";
import Link from "next/link";

interface BestSellingCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  price?: number;
  categories: string;
  slug: string;
}

const BestSellingCard: React.FC<BestSellingCardProps> = ({
  src,
  alt,
  title,
  description,
  price,
  categories,
  slug,
}) => {
  return (
    <div className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/${categories}/${slug}`}>
        
          {/* Image Section */}
          <figure className="w-full">
            <Image
              src={src}
              alt={alt}
              height={400}
              width={400}
              className="rounded-t-lg"
            />
          </figure>

          {/* Card Content */}
          <div className="p-4 text-center">
            {title && (
              <h2 className="text-2xl font-bold underline bg-pink-900 text-white py-2 rounded">
                {title}
              </h2>
            )}
            {description && <p className="text-gray-700 text-lg mt-4">{description}</p>}
            {price && (
              <div className="text-lg font-semibold text-gray-800 mt-4">
                ${price.toFixed(2)}
              </div>
            )}
          </div>
        
      </Link>

      {/* Actions */}
      <div className="flex items-center justify-center gap-4 p-4 border-t">
    <Link href={'/cart'}>  <button className="bg-pink-900 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors">
          Add to Cart
        </button>
        </Link>
        
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors">
          Shop Now
        </button>
      
      </div>
    </div>
  );
};

export default BestSellingCard;
