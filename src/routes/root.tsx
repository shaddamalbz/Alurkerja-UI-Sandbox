import { createBrowserRouter } from 'react-router-dom'

// pages
import { ErrorPage } from '@/pages/Others'
import { Dashboard } from '@/pages/Others/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Dashboard /> }],
  },
])

export default router
