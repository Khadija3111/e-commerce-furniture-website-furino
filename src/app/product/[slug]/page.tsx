import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: { slug: string }; // Directly define params with slug
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      _type,
      productImage,
      price,
      tags,
       description,
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params; // Destructure the slug from params
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found.</div>; // Handle the case where no product is found
  }

  return (
    <>
<div className=" bg-white">
      <div className="container mx-auto px-4 bg-white">
                    <div className="flex">
                        <div className="w-1/2">
                            {/* Product images */}
                           <div className="w-[553px] h-[500px]">     {product.productImage ? (
    <Image
      src={urlFor(product.productImage.asset._ref).url()} // Correct property
      alt={product.title}
      width={553} // Add width
      height={500} // Add height
      className="object-cover rounded-lg"
    />
  ) : (
    <p>No Image Available</p> // Handle cases where no image exists
  )}
</div>
                        </div>
                        <div className="w-1/2 pl-8">
                            {/* Product details */}
                            <h1 className="text-5xl font-medium mb-4 text-black ">{product.title}</h1>
                            <p className="text-xl font-bold mb-2 text-gray-400">Price: ${product.price}</p>
                            <div className="mb-4 text-black">
                                
                               
                            </div>
                            <p className="mb-4 text-black">
                               {product.description}
                            </p>
                            <div className="mb-4 text-black">
    <label className="block mb-2 text-gray-400">Size</label>
    <select className="border border-gray-300 rounded px-2 py-1">
        <option value="XL">XL</option>
        <option value="L">L</option>
        <option value="M">M</option>
    </select>
</div>
                           
                            <div className="flex mb-4 space-x-12 > * + *">
                                <div className="w-[100px] h-[60px] ">
                                    <input type="number" className="border border-gray-300 rounded px-2 py-1 text-black w-full" defaultValue="1" />
                                </div>
                                <div className="flex space-x-12 > * + *">
                                    <button className="bg-white  rounded px-6 py-3  w-[500px ] h-[60px] border-gray-700 border-2 p-5 text-black"><Link  href="/cart" >Add To Cart</Link></button>
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    </>
  );
}
