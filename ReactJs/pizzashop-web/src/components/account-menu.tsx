import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="selection-none flex items-center gap-2"
        >
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Marcio Morais</span>
          <span className="text-muted-foreground text-xs font-normal">
            marcin_bk@yahoo.comm.br
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="h-4w-4 mr-2" />
          <span> Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="h-4w-4 mr-2 text-rose-500 dark:text-rose-400" />
          <span> Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
