import React from 'react'
import { Switch, Route } from 'react-router-dom'

import List from './pages/List/List'
import Add from './pages/Add/Addtodo'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={List} />
      <Route path='/add' component={Add} />
    </Switch>
  )
}