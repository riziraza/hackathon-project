import ProductCard from '@/components/ProductCard'
import p1 from '/public/images/p1.webp'
import { Products } from '@/utils/mock'
import { StaticImageData } from 'next/image';

function ProductList() {
  
  const productChunks = Products.slice(0,3);
  return (
    <div className='flex justify-evenly mt-16'>
      {
        productChunks.map((product)=>(
          
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

      {/* <ProductCard title="Flext SweatShirt" price={104} img={p1}/>
      <ProductCard title="Cameryn Sash Tie Dress" price={545} img={p1}/>
      <ProductCard title="Flext SweatShirt" price={172} img={p1}/> */}

    </div>
  )
}

export default ProductList
