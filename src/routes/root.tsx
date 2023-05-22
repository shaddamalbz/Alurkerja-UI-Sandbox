import { createBrowserRouter } from 'react-router-dom'

// layouts
import { AdminLayout } from '@/layouts'

// pages
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLayout />,
    children: [{ index: true, element: <App /> }],
  },
])

export default router
