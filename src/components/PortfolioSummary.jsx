import './PortfolioSummary.css'

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value >= 1000 ? 0 : 2,
  }).format(value)

const PortfolioSummary = ({
  balance,
  dayChange,
  dayChangePercent,
  allocations,
  cash,
  buyingPower,
}) => {
  const isPositive = dayChange >= 0

  return (
    <section className="panel portfolio-summary">
      <header className="panel-header">
        <div>
          <p className="panel-subtitle">Total Balance</p>
          <h2 className="panel-title">{formatCurrency(balance)}</h2>
        </div>
        <span className={`pill ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '+' : '-'}{formatCurrency(Math.abs(dayChange))} ({Math.abs(dayChangePercent).toFixed(2)}%)
        </span>
      </header>

      <div className="summary-metrics">
        <div className="metric">
          <p className="metric-label">Cash</p>
          <p className="metric-value">{formatCurrency(cash)}</p>
        </div>
        <div className="metric">
          <p className="metric-label">Buying Power</p>
          <p className="metric-value">{formatCurrency(buyingPower)}</p>
        </div>
      </div>

      <div className="allocation-card">
        <h3>Asset Allocation</h3>
        <div className="allocation-list">
          {allocations.map((allocation) => (
            <div key={allocation.label} className="allocation-item">
              <div className="allocation-row">
                <span>{allocation.label}</span>
                <span>{allocation.value}%</span>
              </div>
              <div className="allocation-bar">
                <div
                  className="allocation-bar-fill"
                  style={{
                    width: `${allocation.value}%`,
                    background: allocation.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSummary
