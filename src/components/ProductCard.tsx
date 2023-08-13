import Image, { StaticImageData } from 'next/image'
import Link from "next/link"
import AddToCart from './AddToCart';


function ProductCard(props:
  {
    title:string, 
    price:number,
    img:StaticImageData,
    category:string,
    id:number;
  }) {
  return (
    
      <div className='py-5'>
        <Link href={`/products/${props.id}`}>
          <Image src={props.img} alt="product 1 "/><hr/>
          <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
          <p className='font-bold text-lg'>${props.price}</p>
          <p className='font-bold text-lg'>
            Category : <span className='text-base font-normal'>{props.category}</span>
          </p>
        </Link>
        <AddToCart/>
      </div>
    
  )
}

export default ProductCard