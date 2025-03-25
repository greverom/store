"use client"

import { useCart } from "@/context/cart.context"


export default function CartTotal() {
  const { subtotal } = useCart()
  const shipping = subtotal > 0 ? 5.99 : 0
  const tax = subtotal * 0.16
  const total = subtotal + shipping + tax

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg mb-2">Resumen del Pedido</h3>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Envío</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Impuestos (16%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

