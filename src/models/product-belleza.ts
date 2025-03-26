import { Product } from "@/models/products"

export const productosBelleza: Product[] = [
  {
    id: 1,
    nombre: "Crema Facial Hidratante",
    descripcion: "Hidratación profunda para todo tipo de piel",
    precio: 29.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "belleza",
  },
  {
    id: 2,
    nombre: "Sérum Antiarrugas",
    descripcion: "Fórmula avanzada con ácido hialurónico",
    precio: 39.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "belleza",
  },
  {
    id: 3,
    nombre: "Mascarilla Facial",
    descripcion: "Purifica y revitaliza tu piel en minutos",
    precio: 19.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "belleza",
  },
  {
    id: 4,
    nombre: "Aceite Esencial",
    descripcion: "Mezcla de aceites naturales para relajación",
    precio: 24.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "belleza",
  },
]


export interface ProductColor {
  hex_value: string
  colour_name: string
}

export interface BeautyProduct {
  id: number
  brand: string | null
  name: string
  price: string
  price_sign: string | null
  currency: string | null
  image_link: string
  product_link: string
  website_link: string
  description: string | null
  rating: number | null
  category: string | null
  product_type: string
  tag_list: string[]
  created_at: string
  updated_at: string
  product_api_url: string
  api_featured_image: string
  product_colors: ProductColor[]
}
