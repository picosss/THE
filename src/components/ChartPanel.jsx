import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './ChartPanel.css'

const ChartPanel = ({ data }) => {
  return (
    <section className="panel chart-panel">
      <header className="panel-header">
        <h2 className="panel-title">Equity Curve</h2>
        <p className="panel-subtitle">Performance over the last 12 months</p>
      </header>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6a9bff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6a9bff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
            <YAxis
              stroke="rgba(255,255,255,0.45)"
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              cursor={{ stroke: 'rgba(255,255,255,0.18)', strokeWidth: 1 }}
              contentStyle={{
                background: 'rgba(16, 19, 32, 0.95)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '0.75rem',
                color: '#f7f9ff',
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#86b7ff"
              strokeWidth={2}
              fill="url(#valueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default ChartPanel
