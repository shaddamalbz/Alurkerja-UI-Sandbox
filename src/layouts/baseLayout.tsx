import { Link, Outlet } from 'react-router-dom'

const baseLayout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default baseLayout
