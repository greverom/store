"use client"

import { Slider } from "@/components/ui/slider"

type Props = {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
}

export default function PriceSlider({ min, max, value, onChange }: Props) {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-md">
      <h4 className="text-md font-medium mb-2">Filtrar por precio</h4>

      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>${min}</span>
        <span>${max}</span>
      </div>

      <Slider
        min={min}
        max={max}
        step={1}
        value={[value]}
        onValueChange={([val]) => onChange(val)}
      />

      <div className="text-sm mt-3 text-gray-700">
        Precio <span className="font-semibold">${value}</span>
      </div>
    </div>
  )
}