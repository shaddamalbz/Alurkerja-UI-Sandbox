import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from 'alurkerja-ui'
import clsx from 'clsx'

export default function AdminLayout() {
  const [toggled, setToggled] = useState(false)

  return (
    <>
      <div className="fixed h-screen">
        <Sidebar toggled={toggled} setToggled={setToggled} menuConfig={[]} />
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
    </>
  )
}
