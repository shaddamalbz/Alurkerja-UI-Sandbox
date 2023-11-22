import { Outlet, createBrowserRouter } from 'react-router-dom'

// layouts
import { AdminLayout } from '@/layouts'

// pages
import { NotFound, ErrorPage } from '@/pages/Others'
import { Login, Register, ForgotPassword, ResetPassword } from '@/pages/Auth'
import { Dashboard } from '@/pages/Others/Dashboard'

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/login',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: '/register',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Register /> }],
  },
  {
    path: '/forgot-password',
    element: <Outlet />,
    errorElement: <ErrorPage />,

    children: [{ index: true, element: <ForgotPassword /> }],
  },
  {
    path: '/reset-password',
    element: <Outlet />,
    errorElement: <ErrorPage />,

    children: [{ index: true, element: <ResetPassword /> }],
  },
  {
    path: '/',
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Dashboard /> }],
  },
])

export default router
