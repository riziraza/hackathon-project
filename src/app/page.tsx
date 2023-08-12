import Image from 'next/image'
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'

// import { Button } from "@/components/ui/button"
// import { Heart } from '../../node_modules/lucide-react'
// import { Mail } from '../../node_modules/lucide-react'

export default function Home() {
  return (
    <div>
      <Hero/><br/>
      {/* Products */}
      <ProductList/>
      <div>
      {/* 

      <Button className="p-6 m-6">Button</Button>
      <br/>

      <Button className='p-6 m-6'>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button className='p-6 m-6'>
        <Heart className="mr-2 h-4 w-4" /> Login with Email
      </Button> */}
    </div>
    </div>)
}
