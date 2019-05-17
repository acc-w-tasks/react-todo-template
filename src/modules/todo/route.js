import List from './index'
import Single from './containers/single'

export default [
  {
    path: '/',
    component: List,
    isExact: true,
    useLayout: true,
    headerTitle: 'Список задач'
  },
  {
    path: '/:id',
    component: Single,
    isExact: true,
    useLayout: true,
    headerTitle: 'Задача'
  }
]