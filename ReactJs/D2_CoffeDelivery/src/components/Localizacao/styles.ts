import styled from 'styled-components'
export const LocalizacaoContainer = styled.div`
  display: flex;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  height: 1.5rem;
  padding: 1rem;
  margin-left: auto;

  p {
    font-size: 0.9rem;
  }
  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.purple};
    width: 1.5rem;
    height: 1.5rem;
  }
`
