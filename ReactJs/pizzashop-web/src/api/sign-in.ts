// src/api/sign-in.ts
import { supabase } from '@/lib/supabase'
// Importe a instância do Supabase

export interface SignInBody {
  email: string
}

export async function signIn({ email }: SignInBody) {
  // Use o método `signInWithOtp` do cliente Supabase para enviar o Magic Link
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // O Supabase enviará um link para o e-mail do usuário que, ao ser clicado,
      // o redirecionará de volta para esta URL da sua aplicação.
      // É crucial que esta URL seja acessível pelo navegador do usuário.
      emailRedirectTo: `${window.location.origin}/dashboard`, // Exemplo: redireciona para a rota /dashboard
    },
  })

  if (error) {
    // Se houver um erro no Supabase (ex: e-mail inválido, problema no servidor de e-mail),
    // ele será capturado aqui e propagado para o `useMutation`.
    console.error('Erro ao enviar Magic Link do Supabase:', error.message)
    throw new Error(error.message) // Lança o erro para ser pego pelo `onError` do React Query
  }

  // Se não houver erro, o e-mail com o Magic Link foi enviado com sucesso.
  // O Supabase não retorna dados de sessão aqui, pois a sessão só é estabelecida
  // depois que o usuário clica no link no e-mail.
}
