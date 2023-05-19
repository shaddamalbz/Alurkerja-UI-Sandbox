import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthContext } from 'alurkerja-ui'
import axiosInstance from '@/api/index'
import 'alurkerja-ui/dist/style.css'

// routes
import router from './routes/root'

// styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContext.Provider value={axiosInstance}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  </React.StrictMode>
)
