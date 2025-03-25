"use client"

import Image from "next/image"
import AddToCartButton from "@/components/shared/add-to-cart-button"
import { Product } from "@/models/products"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-64">
        <Image
          src={product.imagen || "/placeholder.svg"}
          alt={product.nombre}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.nombre}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.descripcion}</p>
        <div className="flex justify-between items-center">
          <span className="text-md font-bold">${product.precio}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}