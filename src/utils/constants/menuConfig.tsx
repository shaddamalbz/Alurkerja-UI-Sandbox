import type { MenuConfig } from 'alurkerja-ui'
import { Home } from 'lucide-react'

export const menuConfig: MenuConfig[] = [
  {
    href: '/',
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
      {
        href: '/simple-c',
        label: 'Simple C',
      },
    ],
  },
]
