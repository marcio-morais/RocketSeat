import { MapPin } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { LocalizacaoContainer } from './styles'

function Localizacao() {
  const [localizacaoFormatada, setLocalizacaoFormatada] = useState('')
  const [erro, setErro] = useState('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (posicao) => {
          const { latitude, longitude } = posicao.coords
          const apiKey = '28c05535daba4cb892e32f8b7beb856f' // Substitua aqui pela sua chave de API do OpenCage
          const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=pt-BR`

          try {
            const resposta = await fetch(url)
            const dados = await resposta.json()

            if (dados.results.length > 0) {
              const components = dados.results[0].components
              const cidade =
                components.city ||
                components.town ||
                components.village ||
                'Desconhecido'
              const uf = components.state_code || 'Desconhecido' // Aqui pegamos a sigla do estado
              setLocalizacaoFormatada(`${cidade}, ${uf}`)
            } else {
              setErro('Não foi possível obter os dados.')
            }
          } catch {
            setErro('Erro ao buscar informações.')
          }
        },
        () => {
          setErro('Não foi possível acessar a localização.')
        },
      )
    } else {
      setErro('Geolocalização não é suportada neste navegador.')
    }
  }, [])

  if (erro) return <p>{erro}</p>

  return (
    <LocalizacaoContainer>
      <MapPin size={32} weight="fill" />
      {localizacaoFormatada ? (
        <p>{localizacaoFormatada}</p>
      ) : (
        <p>Obtendo localização...</p>
      )}
    </LocalizacaoContainer>
  )
}

export default Localizacao
