import { FC, Dispatch, SetStateAction } from 'react'
import { MenuConfig, Sidebar } from 'alurkerja-ui'
import { menuConfig } from '@/utils/constants'
import { useLocation } from 'react-router-dom'

interface MenuWrapperProps {
  children: JSX.Element
  menu: MenuConfig
}

interface ExtendedSidebarProps {
  toggled: boolean
  setToggled: Dispatch<SetStateAction<boolean>>
  menuWrapper: (props: MenuWrapperProps) => JSX.Element
}

export const ExtendedSidebar: FC<ExtendedSidebarProps> = ({
  setToggled,
  toggled,
  menuWrapper,
}) => {
  const { pathname } = useLocation()

  return (
    <div className="fixed">
      <Sidebar
        logo={
          <div className="text-main-blue-alurkerja font-bold">Alurkerja</div>
        }
        toggled={toggled}
        setToggled={setToggled}
        menuConfig={menuConfig}
        currentPathName={pathname}
        menuWrapper={menuWrapper}
      />
    </div>
  )
}
