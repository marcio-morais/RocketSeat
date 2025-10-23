import { DayOrderAmountCard } from './day-orders-amout'
import { CancelOrderAmountCard } from './month-cancel-orders-amount'
import { MonthOrderAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flez flex=col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrderAmountCard />
          <DayOrderAmountCard />
          <CancelOrderAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4 pt-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </div>
  )
}
