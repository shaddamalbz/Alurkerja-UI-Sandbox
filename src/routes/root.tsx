import { Outlet, createBrowserRouter } from 'react-router-dom'

// layouts
import { AdminLayout } from '@/layouts'

// pages
import { NotFound, Error, Starter } from '@/pages'
import { Login, Register, ForgotPassword, ResetPassword } from '@/pages/auth'

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/login',
    element: <Outlet />,
    errorElement: <Error />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: '/register',
    element: <Outlet />,
    errorElement: <Error />,
    children: [{ index: true, element: <Register /> }],
  },
  {
    path: '/forgot-password',
    element: <Outlet />,
    errorElement: <Error />,

    children: [{ index: true, element: <ForgotPassword /> }],
  },
  {
    path: '/reset-password',
    element: <Outlet />,
    errorElement: <Error />,

    children: [{ index: true, element: <ResetPassword /> }],
  },
  {
    path: '/',
    element: <AdminLayout />,
    errorElement: <Error />,
    children: [{ index: true, element: <Starter /> }],
  },
])

export default router
