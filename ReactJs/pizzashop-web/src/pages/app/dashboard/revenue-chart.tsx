import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
  { date: '2025-05-01', revenue: 1500 },
  { date: '2025-05-02', revenue: 3200 },
  { date: '2025-05-03', revenue: 560 },
  { date: '2025-05-04', revenue: 1215 },
  { date: '2025-05-05', revenue: 1222 },
  { date: '2025-05-06', revenue: 4512 },
  { date: '2025-05-07', revenue: 1525 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="font-meduim text-base">
            Receino no perido
          </CardTitle>
          <CardDescription>Receita diaria no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              width={80}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type={'linear'}
              strokeWidth={2}
              dataKey={'revenue'}
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
