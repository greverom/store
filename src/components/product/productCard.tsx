"use client"

import Image from "next/image"
import { useState } from "react"
import AddToCartButton from "@/components/shared/add-to-cart-button"
import { BeautyProduct } from "@/models/product-belleza"

export default function ProductCard({ product }: { product: BeautyProduct }) {
  const [imageValid, setImageValid] = useState(true)

  if (!imageValid || !product.image_link) return null

  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden flex flex-col h-full">

      <div className="relative h-50 w-full">
        <Image
          src={product.image_link}
          alt={product.name}
          fill
          className="object-content rounded-t-lg"
          onError={() => setImageValid(false)}
          onLoadingComplete={(img) => {
            if (img.naturalWidth === 0) setImageValid(false)
          }}
        />
      </div>

      <div className="p-3">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-5 line-clamp-2">
          {product.description || "Sin descripción"}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-md font-bold">${parseFloat(product.price || "0").toFixed(2)}</span>
          <AddToCartButton
            product={{
              id: product.id,
              nombre: product.name,
              descripcion: product.description || "Sin descripción",
              precio: parseFloat(product.price) || 0,
              imagen: product.image_link,
              categoria: product.product_type || "belleza",
            }}
          />
        </div>
      </div>
    </div>
  )
  
}