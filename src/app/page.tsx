'use client'

import Head from 'next/head'

import Gallery from './comonents/gallery'
import ProductList from './comonents/ProductList'
import { product } from '@/sanity/schemaTypes/product'
import { client } from '@/sanity/lib/client'
import {  four } from '@/sanity/lib/queries'
import { useEffect } from 'react'
import { useState } from 'react'
import { Product } from '../../types/product'
import { addToCart } from './addtocart/page'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() 
{
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(four);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);


const handleAddToCart=(e:React.MouseEvent, product:Product)=>{
e.preventDefault()
addToCart(product)
alert('ADDED TO CART SUCESSFULLY')
}




  return (
<div>

  

<div className='relative w-full h-[716px]'>
  <img src='img1.png' className="w-full h-full object-cover" alt="Hero Image" />
  
  {/* Hide the content on small screens */}
  <div className='absolute pr-[200px] mr-[100px] top-1/2 right-0 transform -translate-y-1/2 h-[443px] w-[643px] bg-[#FFF3E3] bg-opacity-80 p-8 rounded-lg hidden md:block'>
    <h2 className='text-xl tracking-wider font-bold text-gray-800 mb-4'>New Arrival</h2>
    <h1 className='text-4xl font-bold text-[#B88E2F] mb-6'>Discover Our
      <br/> New Collection</h1>
    <p className='text-lg text-black mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <button className='bg-[#B88E2F] w-[222px] h-[74px] text-white py-2 px-6 rounded-sm text-lg hover:bg-yellow-600'>
      Buy Now
    </button>
  </div>
</div>



<div className="text-center py-16 bg-gray-100">
  
  <h2 className="text-3xl font-bold text-[#333333] mb-4">Browse The Range</h2>
  <p className="text-sm text-zinc-600  mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
  
  <div className="flex justify-center gap-6">
  
    <div className=" relative">
      <img src="dining.png" className="w-[375px] h-[562px]  object-cover rounded-lg" alt="Dining" />
      <div className="absolute bottom-0 left-0 w-full bg-white  text-black text-xl font-bold p-4 text-center">Dining</div>
    </div>
    
    
    <div className=" relative">
      <img src="living.png" className=" w-[375px] h-[562px]  object-cover rounded-lg" alt="Living" />
      <div className="absolute bottom-0 left-0 w-full bg-white  text-black text-xl font-bold p-4 text-center">Living</div>
    </div>
    
    
    <div className="relative">
      <img src="bed.png" className=" object-cover rounded-lg w-[375px] h-[562px] " alt="Bedroom" />
      <div className="absolute bottom-0 left-0 w-full bg-white  text-black text-xl font-bold p-4 text-center">Bedroom</div>
    </div>
  </div>
</div>
{/* cards */}

<div className="px-4 sm:px-8 md:px-16 lg:px-[250px] py-16 bg-gray-100">
  <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Products</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
    {product.map((product) => (
      <div
        key={product._id}
        className="relative w-[285px] h-[466px] bg-white shadow-lg rounded-lg overflow-hidden mx-auto"
      >
        <Link href={`/product/${product.slug.current}`}>
          {/* Product Image */}
          {product.productImage && (
            <Image
              src={urlFor(product.productImage.asset._ref).url()}
              alt={product.title}
              width={200}
              height={200}
              className="w-[285px] h-[301px] object-cover"
            />
          )}
          {/* Product Title */}
          <h3 className="text-lg font-semibold text-[#3A3A3A]">{product.title}</h3>
          {/* Product Price */}
          <p className="text-sm font-bold text-black">Price: ${product.price}</p>
        </Link>
        {/* Optional Tags */}
        {product.tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        <button
          className="bg-[#B88E2F] hover:bg-[#ffc744] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold py-2 px-6 rounded-lg shadow-md w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] transition-all focus:outline-none focus:ring-2 focus:ring-[#95a5a6]"
          onClick={(e) => handleAddToCart(e, product)}
        >
          ADD TO CART
        </button>
      </div>
    ))}
  </div>

  <div className="mt-8 flex justify-center">
    <button className="w-[176px] h-[48px] bg-white border-2 border-[#B88E2F] text-[#B88E2F] py-2 px-6 rounded-md text-center text-lg">
      Show More
    </button>
  </div>
</div>




{/* {next page } */}
<div className="text-center py-16 bg-gray-100">
  <div className="flex flex-wrap justify-center gap-6">
    
    {/* Left Section */}
    <div className="relative mt-8 md:mt-0">
      <img 
        src="til.png" 
        className="w-full max-w-[422px] h-auto object-cover rounded-lg" 
        alt="Dining" 
      />
      <button className="w-[176px] h-[48px] bg-[#B88E2F] text-white rounded-md text-lg mt-5 hover:bg-yellow-600 transition">
        Explore More
      </button>
    </div>

    {/* Middle Section */}
    <div className="relative">
      <img 
        src="next1.png" 
        className="w-full max-w-[375px] h-auto object-cover rounded-lg" 
        alt="Living" 
      />
    </div>

    {/* Right Section */}
    <div className="relative">
      <img 
        src="next2.png" 
        className="w-full max-w-[375px] h-auto object-cover rounded-lg" 
        alt="Bedroom" 
      />
      <div className="absolute bottom-0 left-0 w-full bg-white text-black text-xl font-bold p-4 text-center">
        <img src="indicator.png" alt="Indicator" />
      </div>
    </div>
  </div>
</div>
<Gallery></Gallery>
</div>

    
  )
}
// function useState<T>(arg0: never[]): [any, any] {
//   throw new Error('Function not implemented.')
// }

