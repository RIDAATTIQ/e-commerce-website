"use client"
    import React, { useState } from 'react';
    import Link from 'next/link';
    const Cart = () => {
      const [quantity, setQuantity] = useState(1);
      
      const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
      };
    
      const handleAddToCart = () => {
        // Add to cart logic here
        alert(`Added ${quantity} item(s) to your cart.`);
      };
    
      return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center text-gray-700">Add to Cart</h2>
          
          <div className="mt-4">
            <p className="text-gray-500 text-sm">Choose the quantity you want to add:</p>
            
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
              min="1"
            />
          </div>
          
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-pink-800 text-white rounded-lg shadow-md hover:bg-pink-700transition duration-200"
            >
              Add to Cart
            </button>
          </div>
    
          <div className="mt-4 text-center">
          <li>  <Link href="/cart" className="text-black hover:underline">Go to Cart</Link></li>
          </div>
        </div>
      );
    };
    
    export default Cart
  
