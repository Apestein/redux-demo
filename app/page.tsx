"use client"
import Image from "next/image"
import { Inter } from "next/font/google"
import type { RootState } from "./store"
import { useSelector, useDispatch } from "react-redux"
import { toggleGluten, addTopping } from "./pizzaSlice"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const toppings = useSelector((state: RootState) => state.pizza.toppings)
  const isGluten = useSelector((state: RootState) => state.pizza.gluten)
  console.log({ toppings, isGluten })
  const dispatch = useDispatch()
  return (
    <main className={inter.className}>
      <div className="flex flex-col">
        {toppings.map((topping, index) => (
          <div key={index}>{topping}</div>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(addTopping("sausage"))}>
          Add Sausage
        </button>
        <button onClick={() => dispatch(toggleGluten())}>Toggle Gluten</button>
      </div>
    </main>
  )
}
