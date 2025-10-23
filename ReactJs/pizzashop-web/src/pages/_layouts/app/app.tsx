// import { AppSidebar } from '@/components/app-sidebar'
// import { Header } from '@/components/header'
// import {
//  SidebarInset,
//  SidebarProvider,
//  SidebarTrigger,
// } from '@/components/ui/sidebar'
// import { Outlet } from 'react-router-dom'
//
// export function AppLayout() {
//  return (
//    <SidebarProvider>
//      <AppSidebar />
//      <SidebarInset>
//        <Header /> {/* Adiciona margem para a sidebar fixa */}
//        <main className="flex-1 p-4">
//          <SidebarTrigger className="md:hidden" />
//          <Outlet />
//        </main>
//      </SidebarInset>
//    </SidebarProvider>
//  )
// }
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { AppSidebar } from '@/components/app-sidebar'
import { Header } from '@/components/header'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import { supabase } from '@/lib/supabase'

export function AppLayout() {
  const navigate = useNavigate() // Hook para navegação
  const [checkingAuth, setCheckingAuth] = useState(true) // Estado para controle de carregamento da autenticação

  useEffect(() => {
    // 1. Verifica a sessão atual do Supabase no carregamento do componente
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        // Se NÃO há uma sessão (usuário não logado), redireciona para a página de login
        navigate('/sign-in', { replace: true })
      } else {
        // Se há uma sessão, permite que o layout da aplicação seja renderizado
        setCheckingAuth(false)
      }
    })

    // 2. Ouve por futuras mudanças no estado de autenticação (ex: logout em outra aba)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' && !session) {
        // Se o evento for de logout e não houver sessão, redireciona para o login
        navigate('/sign-in', { replace: true })
      }
      // Para outros eventos (como SIGNED_IN), não há necessidade de redirecionar AQUI,
      // pois este layout é para usuários logados.
    })

    // Limpa o listener ao desmontar o componente para evitar vazamentos de memória
    return () => {
      subscription.unsubscribe()
    }
  }, [navigate]) // O 'navigate' é uma dependência para garantir que o efeito seja reexecutado se 'navigate' mudar (boa prática)

  // Opcional: Mostra um indicador de carregamento enquanto verifica a autenticação
  if (checkingAuth) {
    return (
      <div className="flex h-screen items-center justify-center text-lg">
        Verificando acesso...
      </div>
    )
  }

  // Se a verificação terminou e o usuário está logado, renderiza o layout
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header /> {/* Adiciona margem para a sidebar fixa */}
        <main className="flex-1 p-4">
          <SidebarTrigger className="md:hidden" />
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
