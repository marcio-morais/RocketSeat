import logo from '../../assets/Logo.png'
import Localizacao from '../Localizacao'
import { ShCart } from '../ShoppingCart'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <Localizacao />
        <ShCart />
      </div>
    </HeaderContainer>
  )
}
