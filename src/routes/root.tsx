import { createBrowserRouter } from 'react-router-dom'

// layouts
import BaseLayout from '@/layouts/baseLayout'

// pages
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [{ index: true, element: <App /> }],
  },
])

export default router
