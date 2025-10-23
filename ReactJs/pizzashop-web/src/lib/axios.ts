import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
  baseURL: env.VITE_SUPABASE_URL,
  headers: {
    apikey: env.VITE_SUPABASE_ANON_KEY,
    Authorization: `Bearer ${env.VITE_SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
  },
})
