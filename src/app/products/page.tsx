import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"

const Allproducts = ()=>{
  return(
    <div className='flex justify-evenly mt-16 py-10 flex-wrap'>
      {
        Products.map((product)=>(
          
          <ProductCard 
            key={product.id} 
            title={product.name} 
            price={product.price} 
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />  
        ))
      }
    </div>
  )
}

export default Allproducts