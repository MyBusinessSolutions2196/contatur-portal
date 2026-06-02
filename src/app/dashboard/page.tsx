export default function DashboardPage() {
  const metrics = [
    { label: 'Faturamento', value: 'R$ 284.500', change: '+12%', color: '#007bff' },
    { label: 'Margem Líquida', value: '11,2%', change: '+2.1%', color: '#28a745' },
    { label: 'Carga Tributária', value: '14,8%', change: '-0.5%', color: '#ffc107' },
    { label: 'Runway', value: '3.1 meses', change: '-0.3m', color: '#dc3545' },
  ]

  const alerts = [
    { title: 'Imposto retido em atraso', severity: 'high' },
    { title: 'Certidão de débitos próxima de vencer', severity: 'medium' },
    { title: 'Balanço contábil não revisado', severity: 'medium' },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard - Visão Geral</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2>Indicadores Principais</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
          {metrics.map((m) => (
            <div key={m.label} style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '8px',
              borderLeft: `4px solid ${m.color}`
            }}>
              <div style={{ fontSize: '12px', color: '#666' }}>{m.label}</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>{m.value}</div>
              <div style={{ fontSize: '12px', color: m.color, marginTop: '5px' }}>{m.change}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Alertas</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {alerts.map((a) => (
            <div key={a.title} style={{
              padding: '12px',
              borderRadius: '4px',
              background: a.severity === 'high' ? '#fff3cd' : '#e7f3ff',
              borderLeft: `4px solid ${a.severity === 'high' ? '#ff6b6b' : '#0066cc'}`
            }}>
              {a.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}