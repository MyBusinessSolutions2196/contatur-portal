export default function FiscalPage() {
  const obligations = [
    { name: 'ECF - Obrigatoriedade', dueDate: '28/06/2026', status: 'pending' },
    { name: 'DCTF - Declaração de Débitos Tributários Federais', dueDate: '15/07/2026', status: 'pending' },
    { name: 'EFD-Contribuições', dueDate: '10/08/2026', status: 'pending' },
    { name: 'Guia de Recolhimento da União (GRU)', dueDate: '05/07/2026', status: 'done' },
  ]

  const taxData = [
    { name: 'ICMS', rate: '7,0%', collected: 'R$ 12.500', status: 'paid' },
    { name: 'PIS/COFINS', rate: '9,65%', collected: 'R$ 8.200', status: 'paid' },
    { name: 'IR Retido', rate: '1,5%', collected: 'R$ 1.200', status: 'delayed' },
    { name: 'ISS', rate: '5,0%', collected: 'R$ 3.100', status: 'pending' },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h1>Módulo Fiscal</h1>

      <div style={{ marginBottom: '30px' }}>
        <h2>Obrigações Fiscais</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Obrigação</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Vencimento</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {obligations.map((o) => (
              <tr key={o.name} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{o.name}</td>
                <td style={{ padding: '10px' }}>{o.dueDate}</td>
                <td style={{ padding: '10px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: o.status === 'done' ? '#d4edda' : o.status === 'delayed' ? '#fff3cd' : '#e2e3e5',
                    fontSize: '12px'
                  }}>
                    {o.status === 'done' ? '✓ Cumprida' : o.status === 'delayed' ? '⚠ Atrasada' : '⏳ Pendente'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Carga Tributária por Tipo</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Imposto</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Alíquota</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Arrecadado</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {taxData.map((t) => (
              <tr key={t.name} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{t.name}</td>
                <td style={{ padding: '10px' }}>{t.rate}</td>
                <td style={{ padding: '10px' }}>{t.collected}</td>
                <td style={{ padding: '10px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: t.status === 'paid' ? '#d4edda' : t.status === 'delayed' ? '#fff3cd' : '#e2e3e5',
                    fontSize: '12px'
                  }}>
                    {t.status === 'paid' ? '✓ Pago' : t.status === 'delayed' ? '⚠ Atrasado' : '⏳ Pendente'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}