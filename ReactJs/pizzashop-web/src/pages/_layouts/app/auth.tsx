/* import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-3 antialiased">
      <div className="border-foreground/5 bg-muted text-muted-foreground col-span-2 flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg font-medium">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza Shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro @copyright pizza.shop {new Date().getFullYear()}
        </footer>
      </div>
      <div className="bg-background text-muted-foreground md-col-span-3 relative flex flex-col items-center justify-center gap-4">
        <Outlet />
      </div>
    </div>
  )
} */

import { Pizza } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { supabase } from '@/lib/supabase'

export function AuthLayout() {
  const navigate = useNavigate() // Hook para navegação
  const [checkingAuth, setCheckingAuth] = useState(true) // Estado para controle de carregamento da autenticação

  useEffect(() => {
    // 1. Verifica a sessão atual do Supabase no carregamento do componente
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        // Se há uma sessão (usuário logado), redireciona para o dashboard
        navigate('/dashboard', { replace: true })
      } else {
        // Se não há sessão, permite que o layout de autenticação seja renderizado
        setCheckingAuth(false)
      }
    })

    // 2. Ouve por futuras mudanças no estado de autenticação (ex: se o usuário logar em outra aba)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        // Se o evento for de login bem-sucedido, redireciona para o dashboard
        navigate('/dashboard', { replace: true })
      }
      // Para outros eventos (como SIGNOUT), não há necessidade de redirecionar AQUI,
      // pois este layout é para usuários deslogados.
    })

    // Limpa o listener ao desmontar o componente para evitar vazamentos de memória
    return () => {
      subscription.unsubscribe()
    }
  }, [navigate]) // O 'navigate' é uma dependência para garantir que o efeito seja reexecutado se 'navigate' mudar (raro, mas boa prática)

  // Opcional: Mostra um indicador de carregamento enquanto verifica a autenticação
  if (checkingAuth) {
    return (
      <div className="flex h-screen items-center justify-center text-lg">
        Verificando autenticação...
      </div>
    )
  }

  // Se a verificação terminou e o usuário não está logado, renderiza o layout
  return (
    <div className="grid min-h-screen grid-cols-3 antialiased">
      <div className="border-foreground/5 bg-muted text-muted-foreground col-span-2 flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg font-medium">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza Shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro @copyright pizza.shop {new Date().getFullYear()}
        </footer>
      </div>
      <div className="bg-background md-col-span-3 relative flex flex-col items-center justify-center gap-4">
        <Outlet />{' '}
        {/* Aqui serão renderizados os componentes de sign-in ou sign-up */}
      </div>
    </div>
  )
}
