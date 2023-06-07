import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from 'alurkerja-ui'
import clsx from 'clsx'

export default function AdminLayout() {
  const [toggled, setToggled] = useState(false)

  return (
    <div className="max-w-screen">
      <div className="fixed">
        <Sidebar
          toggled={toggled}
          setToggled={setToggled}
          menuConfig={[
            { href: '/', label: 'Menu1' },
            { href: '/', label: 'Menu2' },
            { href: '/', label: 'Menu3' },
            { href: '/', label: 'Menu4' },
            { href: '/', label: 'Menu5' },
            { href: '/', label: 'Menu6' },
            { href: '/', label: 'Menu7' },
            { href: '/', label: 'Menu8' },
            { href: '/', label: 'Menu9' },
            { href: '/', label: 'Menu1' },
            { href: '/', label: 'Menu2' },
            { href: '/', label: 'Menu3' },
            { href: '/', label: 'Menu4' },
            { href: '/', label: 'Menu5' },
            { href: '/', label: 'Menu6' },
            { href: '/', label: 'Menu7' },
          ]}
        />
      </div>

      <div
        className={clsx(
          'transition-[margin] ease-in-out duration-400',
          toggled ? 'sm:ml-[80px]' : 'sm:ml-[270px]'
        )}
      >
        <Header />
        <main className="px-4 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
