"use client"

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  return (
    <div className="flex justify-center mt-5 md:mt-12 gap-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 text-sm border border-gray-300 rounded-xl disabled:opacity-50"
      >
        Anterior
      </button>
      <span className="text-sm px-2">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 text-sm border border-gray-300 rounded-xl disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  )
}