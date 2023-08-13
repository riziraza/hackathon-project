'use client'

import { useDispatch } from "react-redux"
import { Button } from "./ui/button"
import { cartActions } from "@/store/slice/cartSlice"

const AddToCart = () => {
  
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(cartActions.addToCart({quantity:1}));
  }
  
  return(
    <Button onClick={addItem}>Add to Cart</Button>
  )
}

export default AddToCart