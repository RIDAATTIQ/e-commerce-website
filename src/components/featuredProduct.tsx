"use client";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellingCard from './bestsellingcard';

const FeaturedProduct = () => {


  const bestSell =[{

    src:"/topsix.jpg",
    alt:"barbie pink top",
    title:"Barbie pink Top",
    description:"perfect choice to look stunning",
price:150,
Categories:"tops",
slug:"pink-top"
},
{

    src:"/toptwo.jpg",
    alt:" stunning gray top",
    title:"stylish gray Top",
    description:"perfect choice to look stunning",
price:150,
Categories:"tops",
slug:"gray-top"
},

{

src:"/ring.jpg",
alt:"red top",
title:"beautiful ring",
description:"perfect choice to look stunning",
price:150,
Categories:"accessories",
slug:"ring"
},
{

src:"/locket.jpg",
alt:"red top",
title:"stylish black locket",
description:"perfect choice to look stunning",
price:150,
Categories:"accessories",
slug:"black-locket"
},

{

src:"/panttwo.jpg",
alt:"girls pants",
title:"stylish girls pants",
description:"perfect choice to look stunning",
price:150,
Categories:"pants",
slug:"black-pants"
},

{

src:"/pant.jpg",
alt:"girls stylish pants",
title:"stylish girls pants",
description:"perfect choice to look stunning",
price:150,
Categories:"pants",
slug:"girls-pants"
},
{

src:"/shoes.jpg",
alt:"red top",
title:"stylish girls sandles",
description:"perfect choice to look stunning",
price:150,
Categories:"shoes",
slug:"girls-shoes"
},
{

src:"/shoestwo.jpg",
alt:"red top",
title:"stylish girls shoes",
description:"perfect choice to look stunning",
price:150,
Categories:"shoes",
slug:"black-shoes"
},
{

src:"/purse.jpg",
alt:"red top",
title:"stylish girl Bags",
description:"perfect choice to look stunning",
price:150,
Categories:"accessories",
slug:"white-bag"
},

{

  src:"/gloss.jpg",
  alt:"red top",
  title:"lip gloss",
  description:"perfect choice to look stunning",
  price:150,
  Categories:"accessories",
  slug:"glossses"
  }]















    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
        <div className="text-black flex justify-center items-center font-extrabold underline bg-pink-800 py-4">
        FeaturedProduct</div>
        <Slider {...settings}>
        {
    bestSell.map((items,i)=>(
        <BestSellingCard  key={i} 
        src={items.src} alt={items.alt}title={items.title}description={items.description}price={items.price}categories={items.Categories}slug={items.slug} />
   
   ))
}


      </Slider>
    </div>
    
  )
}

export default FeaturedProduct