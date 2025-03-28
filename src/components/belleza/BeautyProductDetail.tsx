"use client"

import { useParams } from "next/navigation"
import { useBeautyProduct } from "@/hooks/useBeautyProduct"
import Image from "next/image"

export default function BeautyProductDetail() {
  const { id } = useParams()
  const { product, isLoading, error } = useBeautyProduct(id as string)

  if (isLoading) return <p className="text-center py-10">Cargando producto...</p>
  if (error || !product) return <p className="text-center py-10 text-red-500">Producto no encontrado.</p>

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-md shadow-sm">
      {/* Imagen */}
      <div className="relative w-full h-[400px] rounded-md overflow-hidden border">
        <Image
          src={product.image_link}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Detalles */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-500 text-sm mb-4 capitalize">{product.brand}</p>

        {/* Valoración */}
        {product.rating !== null && (
          <div className="mb-4">
            <span className="text-yellow-500 font-semibold">
              Valoración: {product.rating.toFixed(1)} ★
            </span>
          </div>
        )}

        {/* Precio */}
        <p className="text-lg font-semibold text-primary mb-3">
          ${parseFloat(product.price).toFixed(2)}{" "}
          <span className="text-sm font-normal text-gray-500">{product.currency}</span>
        </p>

        {/* Descripción */}
        <p className="text-sm text-gray-700 mb-6">
          {product.description || "Sin descripción."}
        </p>

        {/* Colores */}
        {product.product_colors?.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Colores disponibles:</h3>
            <div className="flex flex-wrap gap-2">
              {product.product_colors.map((color) => (
                <div key={color.colour_name} className="flex items-center gap-2 text-sm">
                  <div
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: color.hex_value }}
                  />
                  <span>{color.colour_name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}