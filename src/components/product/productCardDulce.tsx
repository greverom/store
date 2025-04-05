"use client"

import Image from "next/image"
import { useState } from "react"
import AddToCartButton from "@/components/shared/add-to-cart-button"
import { DessertProduct } from "@/models/product-dulces"

export default function ProductCardDulce({ product }: { product: DessertProduct }) {
  const [imageValid, setImageValid] = useState(true)

  if (!imageValid || !product.strMealThumb) return null

  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-40 w-full">
        <Image
          src={product.strMealThumb}
          alt={product.strMeal}
          fill
          className="object-cover rounded-t-lg opacity-89"
          onError={() => setImageValid(false)}
          onLoadingComplete={(img) => {
            if (img.naturalWidth === 0) setImageValid(false)
          }}
        />
      </div>

      <div className="p-3">
        <h3 className="text-md font-semibold mb-2 line-clamp-1">{product.strMeal}</h3>
        {/* <p className="text-gray-600 text-sm mb-5 line-clamp-2">Producto artesanal</p> */}

        <div className="flex justify-between items-center">
          <span className="text-sm font-bold">$12.00</span>
          <AddToCartButton
            product={{
              id: Number(product.idMeal),
              nombre: product.strMeal,
              descripcion: "Producto artesanal",
              precio: 12.0,
              imagen: product.strMealThumb,
              categoria: "dulces",
            }}
          />
        </div>
      </div>
    </div>
  )
}