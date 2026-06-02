export const metadata = {
  title: 'Dashboard | Contatur',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Sidebar */}
      <aside style={{
        width: '280px',
        background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
        color: 'white',
        padding: '30px 20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '40px',
          textAlign: 'center',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}>
          📊 Contatur
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="/dashboard" style={{
            padding: '14px 16px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.15)',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s',
            cursor: 'pointer',
            border: 'none',
            fontSize: '16px',
            fontWeight: '500',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >
            📊 Visão Geral
          </a>

          <a href="/dashboard/fiscal" style={{
            padding: '14px 16px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.15)',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s',
            cursor: 'pointer',
            border: 'none',
            fontSize: '16px',
            fontWeight: '500',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >
            💼 Fiscal
          </a>

          <a href="/dashboard/societario" style={{
            padding: '14px 16px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.15)',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s',
            cursor: 'pointer',
            border: 'none',
            fontSize: '16px',
            fontWeight: '500',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >
            🏢 Societário
          </a>
        </nav>

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          fontSize: '12px',
          opacity: 0.8,
          textAlign: 'center'
        }}>
          © 2026 Contatur<br/>
          Portal de Indicadores
        </div>
      </aside>

      {/* Main Content */}
      <main style={{
        flex: 1,
        padding: '40px',
        overflowY: 'auto',
        maxHeight: '100vh'
      }}>
        {/* Header */}
        <div style={{
          background: 'white',
          padding: '20px 30px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ margin: 0, color: '#0066cc', fontSize: '28px' }}>
            Portal Contatur
          </h1>
          <div style={{ fontSize: '14px', color: '#666' }}>
            👤 Usuário • {new Date().toLocaleDateString('pt-BR')}
          </div>
        </div>

        {/* Content */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          padding: '30px'
        }}>
          {children}
        </div>
      </main>
    </div>
  )
}