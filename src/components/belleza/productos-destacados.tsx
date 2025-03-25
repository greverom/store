import { productosBelleza } from "@/models/product-belleza";
import ProductCard from "../product/productCard";


export default function ProductosDestacados() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Productos Destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productosBelleza.map((producto) => (
            <ProductCard key={producto.id} product={producto} />
          ))}
        </div>
      </div>
    </section>
  )
}