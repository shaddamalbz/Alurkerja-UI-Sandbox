import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Header, MenuConfig } from 'alurkerja-ui'
import clsx from 'clsx'
import { LogOut, User2 } from 'lucide-react'
import { useCookies } from 'react-cookie'
import { AxiosResponse } from 'axios'

import { IUser } from '@/utils/types'
import { FullLoading } from '@/pages/Others'
import { axiosInstance } from '@/api'
import { useAuthStore } from '@/stores'
import { Sidebar } from '@/components'

const MenuWrapper = (props: { children: JSX.Element; menu: MenuConfig }) => {
  const { children, menu } = props
  return <Link to={menu.href}>{children}</Link>
}

export function AdminLayout() {
  const navigate = useNavigate()
  const { currentUser, setCurrentUser } = useAuthStore()
  const [cookies, _setCookies, removeCookies] = useCookies()

  const [isAppReady, setIsAppReady] = useState(false)

  const [toggled, setToggled] = useState(false)

  useEffect(() => {
    if (cookies.token) {
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${cookies.token}`

      axiosInstance.interceptors.response.use(
        (response) => {
          // Any status code that lie within the range of 2xx cause this function to trigger

          return response
        },
        (error) => {
          // Any status codes that falls outside the range of 2xx cause this function to trigger

          return Promise.reject(error)
        }
      )

      axiosInstance
        .get<AxiosResponse<IUser>>('/auth/info')
        .then((res) => {
          setCurrentUser(res.data.data)
        })
        .finally(() => {
          setIsAppReady(true)
        })
    } else {
      navigate('/login')
    }
  }, [cookies])

  if (!isAppReady) {
    return <FullLoading />
  }

  return (
    <div className="max-w-screen">
      <Sidebar
        toggled={toggled}
        setToggled={setToggled}
        menuWrapper={MenuWrapper}
      />

      <div
        className={clsx(
          'transition-[margin] ease-in-out duration-400',
          toggled ? 'sm:ml-[80px]' : 'sm:ml-[270px]'
        )}
      >
        <Header
          role={currentUser?.name ?? 'Admin'}
          avatarContent={
            <div className="w-full">
              <div
                className="hover:bg-light-blue-alurkerja hover:text-main-blue-alurkerja px-4 py-2 cursor-pointer flex items-center gap-1"
                onClick={() => {
                  navigate('/profile')
                }}
              >
                <User2 size={18} /> Profile Saya
              </div>
              <div
                className="hover:bg-light-blue-alurkerja hover:text-main-blue-alurkerja px-4 py-2 cursor-pointer flex items-center gap-1"
                onClick={() => {
                  removeCookies('token')
                }}
              >
                <LogOut size={18} />
                Logout
              </div>
            </div>
          }
        />
        <main className="px-4 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
