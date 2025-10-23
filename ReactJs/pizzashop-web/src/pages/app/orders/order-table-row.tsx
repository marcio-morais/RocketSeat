import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { TableCell, TableRow } from '@/components/ui/table'
import { ArrowRight, Search, X } from 'lucide-react'
import { OrderDetails } from './order-details'

interface OrderTableRowProps {
  className?: string
}

export function OrderTableRow({ className }: OrderTableRowProps) {
  return (
    <TableRow className={className}>
      <TableCell>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <OrderDetails />
          </DrawerContent>
        </Drawer>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        f13ds21f32ds13d23s
      </TableCell>
      <TableCell className="text-muted-foreground">Realiado ha</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="text-muted-foreground font-medium">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Marcio Francisco de Morais</TableCell>
      <TableCell className="font-medium">R$ 149.99</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <TableCell>
          <Button variant="ghost" size="xs">
            <X className="mr-2 h-3 w-3" />
            Cancelar
          </Button>
        </TableCell>
      </TableCell>
    </TableRow>
  )
}
