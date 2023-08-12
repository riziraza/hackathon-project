//import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"
import Image from "next/image";

function getProductsDetail (id:number) {
  return Products.filter((product) => product.id == id);
}

export default function Page({ params }: { params: { id: string } }) {
  
  const result = getProductsDetail(Number(params.id));
  
    return  (
      <div className='flex mt-16 py-10 flex-wrap font-bold text-lg'>
      {
         result.map((product)=>(
          <div key={product.id} className="flex justify-between">
            <div>
              <Image src={product.image} alt={product.name}/>
            </div>

            <div className="px-6">
              Product Detail
              <p>Name {product.name}</p>
              <p>Price {product.price}</p>
              <p>Category {product.category}</p>
            </div>
          </div>
 
        )) 
      }
    </div>
  )
}