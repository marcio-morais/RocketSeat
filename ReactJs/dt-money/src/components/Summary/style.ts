import styled, { css } from 'styled-components'

export const SummaryContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`

interface SummaryCardProps {
  $variant?: 'green' | 'red' | 'blue' | 'yellow' | 'gray'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-300']};
  }
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3.125rem;
  }
  ${(props) =>
    props.$variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
  ${(props) =>
    props.$variant === 'red' &&
    css`
      background: ${props.theme['red-700']};
    `}
  ${(props) =>
    props.$variant === 'gray' &&
    css`
      background: ${props.theme['gray-500']};
    `}
`
