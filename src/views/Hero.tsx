import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import heroImage from '/public/images/heroImage.webp'
import Image from 'next/image'

function Hero() {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 py-8'>
      {/* Left Div */}
      <div className='flex-1'>
        <Badge className ="py-3 rounded-lg px-8 bg-green-200 text-orange-700 hover:bg-teal-400">Sale</Badge>
         
        <h1 className="scroll-m-20 py-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial <br/>Take on <br/>Streetwear
        </h1>
        <p className=''>
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <Button className='text-lg h-20 mt-6 p-10'>Start<br/>Shopping</Button>
      </div>
      {/* Right Div */}
      <div className='flex-1'>
        <Image src={heroImage} alt="hero image"/>
        {/* <div className="w-10 h-10 text-center absolute right-1 top-0 rounded-full bg-red-200 text-white text-xs"></div> */}
      </div>
    </section>
  )
}

export default Hero