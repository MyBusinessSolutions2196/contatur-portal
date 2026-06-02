export default function SocietarioPage() {
  const documents = [
    { name: 'Contrato Social', date: '15/03/2020', status: 'updated' },
    { name: 'Alteração Contratual', date: '22/07/2023', status: 'updated' },
    { name: 'Procuração', date: '10/01/2025', status: 'updated' },
    { name: 'Ata de Assembléia Geral', date: '05/06/2024', status: 'pending' },
  ]

  const certifications = [
    { name: 'Certidão Negativa de Débitos Municipais', expiry: '15/08/2026', status: 'active' },
    { name: 'Certidão de Débitos Trabalhistas', expiry: '20/07/2026', status: 'active' },
    { name: 'Situação Cadastral na RFB', expiry: '30/09/2026', status: 'active' },
    { name: 'Comprovante de Inscrição Estadual', expiry: '10/10/2025', status: 'expiring' },
  ]

  const licenses = [
    { name: 'Alvará de Localização', issuer: 'Prefeitura', validUntil: '25/12/2026', status: 'active' },
    { name: 'Licença Ambiental', issuer: 'INEA', validUntil: '15/11/2025', status: 'expiring' },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h1>Módulo Societário</h1>

      <div style={{ marginBottom: '30px' }}>
        <h2>Documentos Societários</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Documento</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Data</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((d) => (
              <tr key={d.name} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{d.name}</td>
                <td style={{ padding: '10px' }}>{d.date}</td>
                <td style={{ padding: '10px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: d.status === 'updated' ? '#d4edda' : '#e2e3e5',
                    fontSize: '12px'
                  }}>
                    {d.status === 'updated' ? '✓ Atualizado' : '⏳ Pendente'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2>Certidões</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Certidão</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Válida até</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {certifications.map((c) => (
              <tr key={c.name} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{c.name}</td>
                <td style={{ padding: '10px' }}>{c.expiry}</td>
                <td style={{ padding: '10px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: c.status === 'active' ? '#d4edda' : '#fff3cd',
                    fontSize: '12px'
                  }}>
                    {c.status === 'active' ? '✓ Ativa' : '⚠ Próxima de vencer'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Alvarás e Licenças</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Licença</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Órgão Emissor</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Válida até</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {licenses.map((l) => (
              <tr key={l.name} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{l.name}</td>
                <td style={{ padding: '10px' }}>{l.issuer}</td>
                <td style={{ padding: '10px' }}>{l.validUntil}</td>
                <td style={{ padding: '10px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: l.status === 'active' ? '#d4edda' : '#fff3cd',
                    fontSize: '12px'
                  }}>
                    {l.status === 'active' ? '✓ Ativa' : '⚠ Próxima de vencer'}
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