"use client"

import { useState } from "react"
import { CreditCard, Landmark, Wallet } from "lucide-react"

type PaymentType = "credit-card" | "bank-transfer" | "digital-wallet"

export default function PaymentMethod() {
  const [paymentType, setPaymentType] = useState<PaymentType>("credit-card")
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")

  return (
    <div className="space-y-6">
      <h3 className="font-medium text-lg mb-4">Selecciona un método de pago</h3>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => setPaymentType("credit-card")}
          className={`p-4 border rounded-lg flex flex-col items-center justify-center gap-2 transition-colors ${
            paymentType === "credit-card" ? "border-primary bg-primary/5" : "hover:bg-gray-50"
          }`}
        >
          <CreditCard className={`w-6 h-6 ${paymentType === "credit-card" ? "text-primary" : ""}`} />
          <span>Tarjeta de Crédito</span>
        </button>

        <button
          onClick={() => setPaymentType("bank-transfer")}
          className={`p-4 border rounded-lg flex flex-col items-center justify-center gap-2 transition-colors ${
            paymentType === "bank-transfer" ? "border-primary bg-primary/5" : "hover:bg-gray-50"
          }`}
        >
          <Landmark className={`w-6 h-6 ${paymentType === "bank-transfer" ? "text-primary" : ""}`} />
          <span>Transferencia Bancaria</span>
        </button>

        <button
          onClick={() => setPaymentType("digital-wallet")}
          className={`p-4 border rounded-lg flex flex-col items-center justify-center gap-2 transition-colors ${
            paymentType === "digital-wallet" ? "border-primary bg-primary/5" : "hover:bg-gray-50"
          }`}
        >
          <Wallet className={`w-6 h-6 ${paymentType === "digital-wallet" ? "text-primary" : ""}`} />
          <span>Monedero Digital</span>
        </button>
      </div>

      {paymentType === "credit-card" && (
        <div className="space-y-4 mt-6">
          <div>
            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
              Número de Tarjeta
            </label>
            <input
              type="text"
              id="card-number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre en la Tarjeta
            </label>
            <input
              type="text"
              id="card-name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700 mb-1">
                Fecha de Expiración
              </label>
              <input
                type="text"
                id="expiry-date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/AA"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>
      )}

      {paymentType === "bank-transfer" && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Datos para Transferencia</h4>
          <p className="text-sm text-gray-600 mb-1">Banco: Banco Nacional</p>
          <p className="text-sm text-gray-600 mb-1">Titular: Mi Tienda S.A.</p>
          <p className="text-sm text-gray-600 mb-1">Cuenta: 1234-5678-9012-3456</p>
          <p className="text-sm text-gray-600">CLAVE: 012345678901234567</p>
          <p className="mt-4 text-sm text-gray-600">
            Una vez realizada la transferencia, envía el comprobante a pagos@mitienda.com
          </p>
        </div>
      )}

      {paymentType === "digital-wallet" && (
        <div className="mt-6 space-y-4">
          <p className="text-gray-600">Selecciona tu monedero digital preferido:</p>

          <div className="grid grid-cols-3 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center gap-2">
              <span className="font-medium">PayPal</span>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center gap-2">
              <span className="font-medium">Mercado Pago</span>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center gap-2">
              <span className="font-medium">Google Pay</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

