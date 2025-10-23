import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'
import { routes } from './routes'

export function App() {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  )
}
