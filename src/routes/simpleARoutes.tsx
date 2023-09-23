import { RouteObject } from 'react-router-dom'
import { ListSimpleA, ReviewCreate } from '@/pages/SimpleA'
import { AdminLayout } from '@/layouts'

export const simpleARoutes: RouteObject[] = [
  {
    path: 'simple-a',
    element: <AdminLayout />,
    children: [
      { index: true, element: <ListSimpleA /> },
      {
        path: 'review/:id/:task_id',
        element: <ReviewCreate />,
      },
    ],
  },
]
