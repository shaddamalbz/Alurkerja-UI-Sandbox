import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import { FullLoading } from '@/pages/Others'
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
            <FullLoading />
          </AuthContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    )

    const spinner = screen.getByTestId('spinner')

    return {
      ...utils,
      spinner,
    }
  }

  test('Should render logo & message', () => {
    const { spinner } = setup()

    expect(spinner).toBeInTheDocument()
  })
})
