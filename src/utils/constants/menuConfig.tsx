import type { MenuConfig } from 'alurkerja-ui'
import { Home, LayoutDashboard } from 'lucide-react'

export const menuConfig: MenuConfig[] = [
  { href: '/', label: 'Dashboard', icon: <LayoutDashboard /> },
  {
    href: '/example',
    label: 'Example Page',
    icon: <Home size={20} />,
    child: [
      {
        href: '/simple-a',
        label: 'Simple A',
      },
      {
        href: '/simple-b',
        label: 'Simple B',
      },
    ],
  },
]
