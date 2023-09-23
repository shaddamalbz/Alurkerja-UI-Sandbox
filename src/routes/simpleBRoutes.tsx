import { Outlet, RouteObject } from 'react-router-dom'
import {
  ListSimpleBPage,
  TaskCCreate,
  TaskACreate,
  TaskBCreate,
} from '@/pages/SimpleB'
import { AdminLayout } from '@/layouts'

export const simpleBRoutes: RouteObject[] = [
  {
    path: 'simple-B',
    element: <AdminLayout />,
    children: [
      { index: true, element: <ListSimpleBPage /> },
      {
        path: 'task-a',
        element: <Outlet />,
        children: [{ path: ':id/task/:task_id', element: <TaskACreate /> }],
      },
      {
        path: 'task-b',
        element: <Outlet />,
        children: [{ path: ':id/task/:task_id', element: <TaskBCreate /> }],
      },
      {
        path: 'task-c',
        element: <TaskCCreate />,
        children: [{ path: ':id/task/:task_id', element: <TaskCCreate /> }],
      },
    ],
  },
]
