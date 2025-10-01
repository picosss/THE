import './PerformancePanel.css'

const PerformancePanel = ({ performance, insights }) => {
  return (
    <section className="panel performance-panel">
      <header className="panel-header">
        <h2 className="panel-title">Performance</h2>
        <p className="panel-subtitle">Trailing metrics vs benchmark</p>
      </header>

      <div className="performance-grid">
        {performance.map((metric) => (
          <div key={metric.label} className="performance-card">
            <div className="performance-card-header">
              <span>{metric.label}</span>
              <span className={metric.delta >= 0 ? 'positive' : 'negative'}>
                {metric.delta >= 0 ? '+' : '-'}{Math.abs(metric.delta).toFixed(2)}%
              </span>
            </div>
            <p className="performance-value">{metric.value}</p>
            <p className="performance-subtext">{metric.caption}</p>
          </div>
        ))}
      </div>

      <div className="insights">
        {insights.map((insight) => (
          <div key={insight.title} className="insight">
            <div className="insight-indicator" style={{ background: insight.color }} />
            <div>
              <p className="insight-title">{insight.title}</p>
              <p className="insight-description">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PerformancePanel
