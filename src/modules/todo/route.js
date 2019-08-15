import {lazy} from 'react'
// import List from './index'
// import Single from './containers/single'

export default [
  {
    path: '/',
    component: lazy(() => import('./index')),
    isExact: true,
    useLayout: true,
    headerTitle: 'Список задач'
  },
  {
    path: '/:id',
    component: lazy(() => import('./containers/single')),
    isExact: true,
    useLayout: true,
    headerTitle: 'Задача'
  }
]