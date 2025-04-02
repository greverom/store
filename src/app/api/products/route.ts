import { NextResponse } from "next/server"
import { BeautyProduct } from "@/models/product-belleza"

export async function GET() {
  try {
    const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")

    if (!res.ok) {
      return NextResponse.json({ error: "Error al obtener productos" }, { status: 500 })
    }

    const data: BeautyProduct[] = await res.json()

    const filtered = data.filter(
      (product) =>
        product.image_link &&
        parseFloat(product.price) > 0 &&
        (
          product.image_link.startsWith("https://cdn.shopify.com") ||
          product.image_link.startsWith("https://www.nyxcosmetics.com") ||
          product.image_link.startsWith("https://s3.amazonaws.com")
        )
    )

    // Devolvemos solo los productos destacados
    const destacados = filtered.slice(10, 18)

    return NextResponse.json(destacados)
  } catch (error) {
    console.error("Error en API interna:", error)
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 })
  }
}