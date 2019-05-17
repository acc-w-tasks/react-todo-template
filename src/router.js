import React from 'react'
import { Switch, Route } from 'react-router-dom'

import withLayout from './hoc/withLayout'

import ToDo from './modules/todo/route'

const ROUTES = [
  ...ToDo
]

const MatchedComponent = () => {
  return (
    <Switch>
      {ROUTES.map((route, i) => (
        <Route
          path={route.path}
          exact={route.isExact}
          key={i}
          render={(props) => withLayout(route, props)}
        ></Route>)
      )}
    </Switch>
  )
}

export default MatchedComponent 