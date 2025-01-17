import React from 'react'
import BestSellingCard from '@/components/bestsellingcard'

const Categories = () => {

    
        const bestSell =[{
    
            src:"/topsix.jpg",
            alt:"red top",
            title:"Barbie Pink Top",
            description:"perfect choice to look stunning",
    price:150,
    Categories:"tops",
    slug:"pink-top"
        },
        {
    
            src:"/toptwo.jpg",
            alt:"barbie pink top",
            title:"stylish gray Top",
            description:"perfect choice to look stunning",
    price:150,
    Categories:"tops",
    slug:"gray-top"
        },
        {
    
            src:"/top.jpg",
            alt:"beautiful red top",
            title:"Beautiful red Top",
            description:"perfect choice to look stunning",
    price:150,
    Categories:"tops",
    slug:"red-top"
        },
        {
    
            src:"/topthree.jpg",
            alt:"gorgeous maroon top",
            title:"Gorgeous maroon Top",
            description:"perfect choice to look stunning",
    price:150,
    Categories:"tops",
    slug:"maroon-top"
        },
        {
    
            src:"/topsix.jpg",
            alt:"barbie pink top",
            title:"Barbie Pink  Top",
            description:"perfect choice to look stunning",
    price:150,
    Categories:"tops",
    slug:"pink-top"
        },
        {
    
            src:"/toptwo.jpg",
            alt:"barbie pink top",
            title:"Beautiful gray  Top",
            description:"perfect choice to look stunning",
    price:150,
    Categories:"tops",
    slug:"gray-top"
        }]


  return (
    <div>
    <div className='text-center text-4xl underline bg-pink-900'> TOPS </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">

    

    {
        bestSell.map((items,i)=>(
            <BestSellingCard
             key={i}
             src={items.src} alt={items.alt}title={items.title}description={items.description}price={items.price} categories={items.Categories} slug={items.slug}/>
        ))
    }
    </div>
</div>


  )
}

export default Categories