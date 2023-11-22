import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import { NotFound } from '@/pages/Others'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import axios from 'axios'
import { AuthContext } from 'alurkerja-ui'

describe('404 Page', () => {
  const queryClient = new QueryClient()

  const setup = () => {
    const axiosInstance = axios.create({
      headers: {
        'Content-type': 'application/json',
      },
    })

    const utils = render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthContext.Provider value={axiosInstance}>
            <NotFound />
          </AuthContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    )

    const logo = screen.getByTestId('logo')
    const message = screen.getByTestId('message')

    return {
      ...utils,
      logo,
      message,
    }
  }

  test('Should render logo & message', () => {
    const { logo, message } = setup()

    expect(logo).toBeInTheDocument()
    expect(message).toBeInTheDocument()

    expect(logo).toHaveTextContent('Bubur Onic')
    expect(message).toHaveTextContent('Halaman Tidak Ditemukan!')
  })
})
