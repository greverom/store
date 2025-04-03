"use client"

import { useEffect, useState } from "react"
import { DessertProduct } from "@/models/product-dulces"
import ProductCardDulce from "../product/productCardDulce"
import { getDessertProducts } from "@/services/desertProductService"

export default function DulcesDestacados() {
  const [products, setProducts] = useState<DessertProduct[]>([])

  useEffect(() => {
    getDessertProducts()
      .then((data) => setProducts(data.slice(0, 10))) 
      .catch((err) => console.error("Error al cargar postres:", err))
  }, [])

  return (
    <section className="pb-22 md:pb-10 bg-white-100">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dulces Destacados</h2> */}

        <div className="overflow-x-auto">
          <div className="flex gap-6 md:gap-8 w-max px-2 md:px-0">
            {products.map((producto) => (
              <div key={producto.idMeal} className="w-[170px] flex-shrink-0">
                <ProductCardDulce product={producto} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}