// src/routes.ts
import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { AppLayout } from './pages/_layouts/app/app'
import { AuthLayout } from './pages/_layouts/app/auth'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
])
