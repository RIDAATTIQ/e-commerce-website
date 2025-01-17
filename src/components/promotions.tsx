import React from 'react'


const Promotions = () => {
  return (
    <section className="text-gray-600 body-font">
        <h1 className='text-black flex flex-justify items-center font-extrabold underline bg-pink-800'> get the special discout now</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          
          {/* Promotion Card 1 with background image */}
          <div className="p-4 lg:w-1/3">
            <div 
              className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative bg-cover bg-center"
              style={{ backgroundImage: "url('/discount.jpg')" }}
              >
        
              <h2 className="tracking-widest text-xs title-font font-bold text-black mb-1">
                Get up to 50% off
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">
                On all winter collection, get the best deals now!
              </h1>
              <p className="leading-relaxed mb-3 text-black">
                We provide the best deals on all winter collection, get the best deals now, hurry up and grab the best offers.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
              </a>
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
          
          {/* Promotion Card 2 with background image */}
          <div className="p-4 lg:w-1/3">
            <div 
              className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative bg-cover bg-center"
              style={{ backgroundImage: "url('/sixty.jpg')" }}
            >
              <h2 className="tracking-widest text-xs title-font font-medium text-black mb-1">
                get the best deals
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">
                up to 60% off on all products
              </h1>
              <p className="leading-relaxed mb-3 text-black">
                Get the best deals on all products, hurry up and grab the best offers.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>

          {/* Promotion Card 3 with background image */}
          <div className="p-4 lg:w-1/3">
            <div 
              className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative bg-cover bg-center"
              style={{ backgroundImage: "url('/jewellary.jpg')" }}
            >
              <h2 className="tracking-widest text-xs title-font font-medium text-black mb-1">
                Get the best deals on all accessories
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">
                Up to 70% off on all accessories
              </h1>
              <p className="leading-relaxed mb-3 text-black">
                Get the best deals on all accessories, hurry up and grab the best offers.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>

        </div>
</div>      
    </section>
  )
}

export default Promotions
