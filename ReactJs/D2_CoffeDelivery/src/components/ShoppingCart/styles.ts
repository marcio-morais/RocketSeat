import styled from 'styled-components'

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  padding: 0.5rem;
  width: 2.5rem;
  height: 2rem;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    height: 1.5rem;
  }
  &:hover svg {
    color: ${(props) => props.theme.white};
  }
`
