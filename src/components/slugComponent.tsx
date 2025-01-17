"use client";
import React, { useState } from 'react'
import Image from 'next/image'

const SlugComponent = () => {
    const[path,setpath]=useState(" ")
  return (
    <div>
    <Image src ={ path ? path : "/topthree.jpg"}
     alt='ecommerce'
      width={400}
      height={400} />
      
    <div className='flex items-center justify-evenly mx-auto mt-2'>
        <div className='cursor-pointer'>
        <Image src ={ path ? path :"/ring.jpg"}
     alt='ecommerce'
      width={60}
      height={60}
      onClick={()=> setpath ("/ring.jpg")}/>
      
      
        </div>

        <div>
        <Image src ={ path ? path :"/pant.jpg"}
     alt='ecommerce'
      width={60}  
      height={60}
      onClick={()=> setpath ("/pant.jpg")}/>
      
      
        </div>

        <div>
        <Image src ={ path ? path :"/shoes.jpg"}
     alt='ecommerce'
      width={60}
      height={60}
      onClick={()=> setpath ("/shoes.jpg")}/>
      
      
        </div>

    </div>
</div>
  )
}

export default SlugComponent
