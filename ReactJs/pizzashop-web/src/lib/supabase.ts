// src/lib/supabase.ts
import { env } from '@/env'
import { createClient } from '@supabase/supabase-js'

// As variáveis já estão garantidas como existentes e corretas pelo Zod
const SUPABASE_URL = env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY

// Exporta a instância do cliente Supabase para uso em autenticação e outras operações
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
