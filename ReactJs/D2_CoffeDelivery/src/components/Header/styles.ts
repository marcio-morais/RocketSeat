import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem 1rem 10rem;
  height: 6.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
    padding: 0.5rem;
    border-radius: 6px;
    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`
