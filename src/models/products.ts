
export type ProductCategory = "belleza" | "dulces" | string

export type Product = {
  id: number
  nombre: string
  precio: number
  imagen: string
  categoria: ProductCategory
  descripcion?: string
}

export type CartItem = Product & {
    cantidad: number
  }


  