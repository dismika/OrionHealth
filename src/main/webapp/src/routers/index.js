import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UsersPage from 'pages/users'
import MedicationsPage from 'pages/medications'

const RouterMain = props => (
  <Switch>
    <Route exact path="/" component={UsersPage} /> 
    <Route path="/users" component={UsersPage} /> 
    
    <Route path="/medication" component={MedicationsPage} /> 

	</Switch>
)

export default RouterMain