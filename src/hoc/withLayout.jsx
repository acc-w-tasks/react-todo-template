import React from 'react'

const withLayout = (route, props) => (
  <main className="page">
    <route.component {...props} componentConfig={route} />
  </main>
)

export default withLayout