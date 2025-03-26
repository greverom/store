"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/product/productCard"
import { BeautyProduct } from "@/models/product-belleza"
import { getBeautyProducts } from "@/services/beautyProductService"

export default function BellezaPage() {
  const [products, setProducts] = useState<BeautyProduct[]>([])

  useEffect(() => {
    getBeautyProducts().then((data) => {

      const filtered = data.filter(
        (product: BeautyProduct) =>
          product.image_link &&
          product.price &&
          product.name
      )

      setProducts(filtered)
    })
  }, [])

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Productos de Belleza</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}