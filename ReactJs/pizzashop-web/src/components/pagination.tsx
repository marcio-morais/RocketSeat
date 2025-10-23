import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Button } from './ui/button'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / perPage)
  const start = pageIndex * perPage + 1
  const end = Math.min(start + perPage - 1, totalCount)

  return (
    <div className="flex items-center justify-between p-4">
      <span className="text-muted-foreground text-sm">
        Total de {totalCount} itens | Exibindo de {start} a {end}
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Pagina {pageIndex + 1} de {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-4 w-4 p-4">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira pagina</span>
          </Button>

          <Button variant="outline" className="h-4 w-4 p-4">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">pagina anterio</span>
          </Button>

          <Button variant="outline" className="h-4 w-4 p-4">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">proxima pagina</span>
          </Button>

          <Button variant="outline" className="h-4 w-4 p-4">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Ultima pagina</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
