'use client'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-blue-600 mb-2">Contatur</div>
          <div className="text-gray-600 text-sm">Portal de Indicadores</div>
        </div>

        <div className="mb-8 text-center">
          <p className="text-gray-700 text-sm leading-relaxed">
            Transforme seus documentos contábeis, fiscais e financeiros em <strong>decisões inteligentes</strong>
          </p>
        </div>

        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-3 text-sm text-gray-700">
            <span className="text-green-500">✓</span>
            <span>Indicadores extraídos por IA</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-700">
            <span className="text-green-500">✓</span>
            <span>Alertas em tempo real</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-700">
            <span className="text-green-500">✓</span>
            <span>Segurança de nível empresarial</span>
          </li>
        </ul>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
          Entrar com Google
        </button>

        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-600">
          <span>🔒</span>
          <span>Dados protegidos com encriptação bancária</span>
        </div>
      </div>
    </div>
  )
}