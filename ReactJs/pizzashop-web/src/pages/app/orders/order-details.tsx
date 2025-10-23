import {
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from '@/components/ui/drawer'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DrawerContent className="p-5">
      <DrawerHeader>
        <DrawerTitle>Pedido: 12321312123</DrawerTitle>
        <DrawerDescription>Detales do pedido</DrawerDescription>
      </DrawerHeader>

      <div className="space-y-6 p-2">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="text-muted-foreground font-medium">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-medium">
                    Marcio Morais
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-medium">
                    (21) 96786-3024
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-medium">
                    marcin_bk@yahoo.com.br
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado ha
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-medium">
                    ha 3 minutos
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Qtd.</TableHead>
            <TableHead className="text-right">Preco</TableHead>
            <TableHead className="text-right">SubTotal</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza de Peperoni Familia</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 50,00</TableCell>
              <TableCell className="text-right">R$ 100,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza de Calabresa Familia</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 55,00</TableCell>
              <TableCell className="text-right">R$ 110,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right">R$ 165,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DrawerContent>
  )
}
