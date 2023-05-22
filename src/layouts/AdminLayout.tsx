import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Sidebar } from 'alurkerja-ui'

export default function AdminLayout() {
  const [toggled, setToggled] = useState(false)

  return (
    <div className="flex">
      <Sidebar toggled={toggled} setToggled={setToggled} menuConfig={[]} />
      <div className="grow">
        <Header />
        <main className=" w-full min-h-[calc(100vh-64px)] bg-slate-100 px-4 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
