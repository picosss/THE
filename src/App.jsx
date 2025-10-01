import './App.css'
import PortfolioSummary from './components/PortfolioSummary'
import PerformancePanel from './components/PerformancePanel'
import ChartPanel from './components/ChartPanel'
import AssetTable from './components/AssetTable'

const portfolioSummary = {
  balance: 152340.87,
  dayChange: 1825.42,
  dayChangePercent: 1.21,
  cash: 18250.0,
  buyingPower: 26450.0,
  allocations: [
    { label: 'Equities', value: 54, color: 'linear-gradient(90deg,#6f8dff,#90c2ff)' },
    { label: 'Fixed Income', value: 22, color: 'linear-gradient(90deg,#63d0ff,#7affd8)' },
    { label: 'Crypto', value: 16, color: 'linear-gradient(90deg,#d67bff,#ff9be7)' },
    { label: 'Cash', value: 8, color: 'linear-gradient(90deg,#ffc46f,#ffe17a)' },
  ],
}

const performanceMetrics = [
  {
    label: '1D Return',
    value: '+$1,825',
    delta: 1.21,
    caption: 'Outperformed S&P 500 by 0.6%',
  },
  {
    label: '1W Return',
    value: '+$3,412',
    delta: 2.31,
    caption: 'Momentum improving vs peers',
  },
  {
    label: '1M Return',
    value: '+$7,982',
    delta: 5.62,
    caption: 'New monthly high set on Tuesday',
  },
  {
    label: 'YTD',
    value: '+$18,230',
    delta: 13.24,
    caption: 'Tracking above 2023 performance',
  },
]

const performanceInsights = [
  {
    title: 'Technology overweight adds alpha',
    description: 'High-conviction tech names contributed 62% of total gains this month.',
    color: '#6f8dff',
  },
  {
    title: 'Volatility within target band',
    description: '10-day portfolio volatility is 9.3%, inside the 8-12% mandate range.',
    color: '#63d0ff',
  },
  {
    title: 'Rebalance recommendation',
    description: 'Trim crypto allocation by 2% and rotate into investment grade bonds.',
    color: '#ffc46f',
  },
]

const chartData = [
  { month: 'Jan', value: 121000 },
  { month: 'Feb', value: 123500 },
  { month: 'Mar', value: 125200 },
  { month: 'Apr', value: 129500 },
  { month: 'May', value: 133200 },
  { month: 'Jun', value: 136750 },
  { month: 'Jul', value: 138400 },
  { month: 'Aug', value: 140250 },
  { month: 'Sep', value: 142680 },
  { month: 'Oct', value: 145100 },
  { month: 'Nov', value: 147920 },
  { month: 'Dec', value: 152340 },
]

const assets = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    sector: 'Technology',
    price: 191.45,
    change: 1.8,
    allocation: 14,
    value: 21345,
    color: '#6f8dff',
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    sector: 'Semiconductors',
    price: 872.12,
    change: 2.3,
    allocation: 12,
    value: 19860,
    color: '#7affd8',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    sector: 'Technology',
    price: 417.86,
    change: 1.1,
    allocation: 11,
    value: 18320,
    color: '#ffc46f',
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    sector: 'Consumer Discretionary',
    price: 182.64,
    change: -0.6,
    allocation: 9,
    value: 14520,
    color: '#d67bff',
  },
  {
    symbol: 'BND',
    name: 'Vanguard Total Bond',
    sector: 'Fixed Income',
    price: 74.18,
    change: 0.4,
    allocation: 8,
    value: 12165,
    color: '#63d0ff',
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin Trust',
    sector: 'Digital Assets',
    price: 61234.12,
    change: 3.5,
    allocation: 6,
    value: 10560,
    color: '#ff9be7',
  },
]

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="app-eyebrow">Portfolio Dashboard</p>
          <h1>Global Multi-Asset Strategy</h1>
        </div>
        <button type="button" className="primary-button">
          New Order
        </button>
      </header>

      <main className="dashboard-grid">
        <PortfolioSummary {...portfolioSummary} />
        <PerformancePanel performance={performanceMetrics} insights={performanceInsights} />
        <ChartPanel data={chartData} />
        <AssetTable assets={assets} />
      </main>
    </div>
  )
}

export default App
