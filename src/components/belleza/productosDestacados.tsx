"use client"

import { useEffect, useState } from "react"
import ProductCard from "../product/productCard"
import { BeautyProduct } from "@/models/product-belleza"
import { getCachedBeautyHighlights } from "@/services/beautyProductService"

export default function ProductosDestacados() {
  const [products, setProducts] = useState<BeautyProduct[]>([])

  useEffect(() => {
    getCachedBeautyHighlights()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al cargar productos destacados:", err))
  }, [])

  return (
    <section className="pb-22 md:pb-10 bg-white-100">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">

        <div className="overflow-x-auto pb-3">
          <div className="flex gap-0 md:gap-3 w-max px-3 md:px-0">
            {products.map((producto) => (
              <div key={producto.id} className="w-[170px] flex-shrink-0 ">
                <ProductCard product={producto} buttonSize="small" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}