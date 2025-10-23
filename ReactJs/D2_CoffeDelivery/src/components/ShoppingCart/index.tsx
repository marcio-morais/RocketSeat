import { ShoppingCart } from '@phosphor-icons/react'
import { ShoppingCartContainer } from './styles'

export function ShCart() {
  return (
    <ShoppingCartContainer title="Carrinho de compras">
      <ShoppingCart size={32} weight="fill" />
    </ShoppingCartContainer>
  )
}
