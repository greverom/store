"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/context/cart.context"


export default function CartSummary({ readOnly = false }: { readOnly?: boolean }) {
  const { items, updateQuantity, removeItem } = useCart()

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg mb-2">Resumen de Productos</h3>

      <div className="divide-y">
        {items.map((item) => (
          <div key={item.id} className="py-4 flex gap-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={item.imagen || "/placeholder.svg"}
                alt={item.nombre}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-medium">{item.nombre}</h4>
                <span className="font-medium">${(item.precio * item.cantidad).toFixed(2)}</span>
              </div>

              <p className="text-sm text-gray-500 capitalize">{item.categoria}</p>

              <div className="mt-2 flex items-center justify-between">
                {!readOnly ? (
                  <>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-l-md"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center border-t border-b">
                        {item.cantidad}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-r-md"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <div className="text-sm text-gray-600">
                    Cantidad: {item.cantidad} x ${item.precio.toFixed(2)}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

