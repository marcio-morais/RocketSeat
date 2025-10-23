import bunner from '../../assets/Bunners/Intro.svg'

import imgCofe from '../../assets/products/Americano.png'

export function Home() {
  return (
    <div>
      <img src={bunner} alt="Intro" />
      <h1>Nossos cafes</h1>

      <ul>
        <li>
          <div>
            <img src={imgCofe} alt="Cafe Americano" />
            <span>Expresso Americano</span>
            <span>Cafe Americano</span>
            <span> Expresso diluito, menos intenso que o tradiciona</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
1
