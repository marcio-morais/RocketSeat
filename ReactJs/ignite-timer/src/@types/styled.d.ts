import 'styled-components'
import { defaultTheme } from '../style/theme/default.ts'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
