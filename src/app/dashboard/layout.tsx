export const metadata = {
  title: 'Dashboard | Contatur',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#f5f5f5', padding: '20px', borderRight: '1px solid #ddd' }}>
        <h2>Contatur</h2>
        <nav style={{ marginTop: '20px' }}>
          <div style={{ padding: '10px', cursor: 'pointer', background: '#007bff', color: 'white', borderRadius: '4px', marginBottom: '10px' }}>📊 Visão Geral</div>
          <div style={{ padding: '10px', cursor: 'pointer', marginBottom: '10px' }}>💼 Fiscal</div>
          <div style={{ padding: '10px', cursor: 'pointer', marginBottom: '10px' }}>🏢 Societário</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  )
}