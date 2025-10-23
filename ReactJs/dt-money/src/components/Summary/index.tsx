import { SummaryCard, SummaryContainer } from './style'

import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollarSimple,
} from '@phosphor-icons/react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>R$ {summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <p>Saidas</p>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <p>Total</p>
          <CurrencyDollarSimple size={32} color="#FFFFFF" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
