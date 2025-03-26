import { productosDulces } from "@/models/product-dulces";
import ProductCard from "../product/productCard";


export default function DulcesDestacados() {
  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dulces Destacados</h2>
      
      <div className="overflow-x-auto">
        <div className="flex gap-6 md:gap-8 w-max px-2 md:px-0">
          {productosDulces.map((producto) => (
            <div key={producto.id} className="w-[300px] flex-shrink-0">
              <ProductCard product={producto} />
            </div>
          ))} 
        </div>
      </div>

    </div>
  </section>
  )
}