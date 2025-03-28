"use client"

import Image from "next/image"
import { useState } from "react"
import AddToCartButton from "@/components/shared/add-to-cart-button"
import { BeautyProduct } from "@/models/product-belleza"

export default function ProductCard({ product }: { product: BeautyProduct }) {
  const [imageValid, setImageValid] = useState(true)

  if (!imageValid || !product.image_link) return null

  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden max-w-[240px] scale-[0.90] lg:scale-100">

      <div className="relative h-43 w-full">
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

      <div className="p-1 md:p-2 lg:p-3">
        <h3 className="text-base font-semibold mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
          {product.description || "Sin descripción"}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold">${parseFloat(product.price || "0").toFixed(2)}</span>
          <div className="scale-[0.8] lg:scale-[0.9]">
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
    </div>
  )
}