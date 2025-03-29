"use client"

import { useEffect, useState } from "react"
import { useCart } from "@/context/cart.context"
import { X } from "lucide-react"
import CartSummary from "./cart-summary"
import CartTotal from "./cart-total"
import PaymentMethod from "./payment-method"
import ShippingAddress from "./shipping-address"

type Step = "summary" | "shipping" | "payment" | "confirmation"

export default function CartModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [step, setStep] = useState<Step>("summary")
  const { items, subtotal, clearCart } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleNextStep = () => {
    if (step === "summary") setStep("shipping")
    else if (step === "shipping") setStep("payment")
    else if (step === "payment") setStep("confirmation")
  }

  const handlePrevStep = () => {
    if (step === "shipping") setStep("summary")
    else if (step === "payment") setStep("shipping")
    else if (step === "confirmation") setStep("payment")
  }

  const handleCheckout = () => {
    clearCart()
    setStep("summary")
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100dvh", 
      }}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in-up"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">
            {step === "summary" && "Tu Carrito"}
            {step === "shipping" && "Dirección de Envío"}
            {step === "payment" && "Método de Pago"}
            {step === "confirmation" && "Confirmar Pedido"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Cerrar">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
              <button onClick={onClose} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                Continuar Comprando
              </button>
            </div>
          ) : (
            <>
              {step === "summary" && (
                <>
                  <CartSummary />
                  <div className="text-right font-semibold mt-4">
                    Subtotal: ${subtotal.toFixed(2)}
                  </div>
                  <div className="mt-6">
                    <CartTotal />
                  </div>
                </>
              )}
              {step === "shipping" && <ShippingAddress />}
              {step === "payment" && <PaymentMethod />}
              {step === "confirmation" && (
                <div className="space-y-6">
                  <CartSummary readOnly />
                  <CartTotal />
                </div>
              )}
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between items-center">
              {step !== "summary" && (
                <button
                  onClick={handlePrevStep}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Atrás
                </button>
              )}

              <div className="ml-auto">
                {step !== "confirmation" ? (
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    {step === "summary" ? "Proceder al Envío" : "Continuar"}
                  </button>
                ) : (
                  <button
                    onClick={handleCheckout}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Completar Compra
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}