import './AssetTable.css'

const AssetTable = ({ assets }) => {
  return (
    <section className="panel asset-table">
      <header className="panel-header">
        <h2 className="panel-title">Holdings</h2>
        <p className="panel-subtitle">Top positions and daily movement</p>
      </header>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Asset</th>
              <th>Last Price</th>
              <th>Day Change</th>
              <th>Allocation</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => {
              const changeClass = asset.change >= 0 ? 'positive' : 'negative'
              return (
                <tr key={asset.symbol}>
                  <td>{asset.symbol}</td>
                  <td>
                    <div className="asset-name">
                      <div className="asset-dot" style={{ background: asset.color }} />
                      <div>
                        <p className="asset-title">{asset.name}</p>
                        <p className="asset-sector">{asset.sector}</p>
                      </div>
                    </div>
                  </td>
                  <td>${asset.price.toFixed(2)}</td>
                  <td className={changeClass}>
                    {asset.change >= 0 ? '+' : '-'}{Math.abs(asset.change).toFixed(2)}%
                  </td>
                  <td>
                    <div className="allocation-pill">
                      <span>{asset.allocation}%</span>
                      <div className="allocation-meter">
                        <span style={{ width: `${asset.allocation}%`, background: asset.color }} />
                      </div>
                    </div>
                  </td>
                  <td>${asset.value.toLocaleString()}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AssetTable
