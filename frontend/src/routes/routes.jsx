import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeScreen from '../pages/home/index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeScreen}  />
    </Switch>
  </BrowserRouter>
)

export default Routes;