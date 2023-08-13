"use client"
// import React from 'react'
import Link from "next/link"
import logo from "/public/images/logo.webp"
import Image from "next/image"
import { ShoppingCart } from "../../../node_modules/lucide-react"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "@/store/store"

const Header = () => {

  const cartValue = useSelector(
    (state:RootState)=>state.cart.totalQuantity
  );

  return (
    <div className="flex justify-between items-center py-6 px-24 bg-red-300">
      <Link href="/">
        <Image src={logo} alt="logo"/>
      </Link>
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"/category/female"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href ={"/category/male"}>Male</Link>
        </li>
        <li className="text-lg">
        <Link href ={"/category/kids"}>Kids</Link>
        </li>
        <li className="text-lg">
        <Link href = "/products">All Products</Link>
        </li>
      </ul>
      <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center relative">
        <span className="w-4 h-4 text-center absolute right-1 top-0 rounded-full bg-red-600 text-white text-xs">
        {cartValue}
        </span>
        <ShoppingCart/>
      </div>

    </div>
  )
}

export default Header