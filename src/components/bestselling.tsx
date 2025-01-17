import React from 'react'
import BestSellingCard from './bestsellingcard'



const Bestselling = () => {
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
}]





  return (
    <div>
        <div className='text-center text-4xl underline bg-pink-900'> Our Best Selling Products</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">

        



{
    bestSell.map((items,i)=>(
        <BestSellingCard key={i} 
        src={items.src} alt={items.alt}title={items.title}description={items.description}price={items.price}categories={items.Categories}slug={items.slug} />
   
   ))
}
</div>
</div>
  )}
export default Bestselling ;
