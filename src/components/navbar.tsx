import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="text-black body-font bg-pink-950">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="ml-3 text-4xl text-black">GIRLS-CHOICE</span>

        <ul className="md:ml-auto flex flex-wrap items-center text-base justify-center text-black gap-9">
          {/* Women Dropdown */}
          <li className="relative group">
            <button className="flex items-center hover:text-gray-900">
              Women
            </button>
            <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg hidden group-hover:block">
              <li><Link href="/tops" className="block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
              <li><Link href="/pants" className="block px-4 py-2 hover:bg-gray-100">Pants</Link></li>
              <li><Link href="/accessories" className="block px-4 py-2 hover:bg-gray-100">Accessories</Link></li>
              <li><Link href="/shoes" className="block px-4 py-2 hover:bg-gray-100">Shoes</Link></li>
            </ul>
          </li>

          {/* Other Links */}
          <li><Link href="/" className="mr-5 hover:text-gray-900">Home</Link></li>
          <li><Link href="/about" className="mr-5 hover:text-gray-900">About</Link></li>
          <li><Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link></li>

          {/* Cart and Search */}
          <li><Link href="/cart"><PiShoppingCartBold className="text-2xl" /></Link></li>
          <li><Link href="/search"><FaSearch className="text-2xl" /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
