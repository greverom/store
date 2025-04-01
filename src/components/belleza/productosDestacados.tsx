"use client"

import { useEffect, useState } from "react"
import ProductCard from "../product/productCard"
import { BeautyProduct } from "@/models/product-belleza"
import { getBeautyProducts } from "@/services/beautyProductService"

export default function ProductosDestacados() {
  const [products, setProducts] = useState<BeautyProduct[]>([])

  useEffect(() => {
    getBeautyProducts()
      .then((data) => setProducts(data.slice(10, 18)))
      .catch((err) => console.error("Error al cargar productos destacados:", err))
  }, [])

  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Productos Destacados
        </h2>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 w-max px-5 md:px-0">
            {products.map((producto) => (
              <div key={producto.id} className="w-[170px] flex-shrink-0">
                <ProductCard product={producto} buttonSize="small" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}