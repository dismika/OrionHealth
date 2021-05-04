import React from 'react';
import { Route } from 'react-router-dom'

import UsersListTable from './components/UsersListTable';
import AddNewUser from './new';

const UsersPage = () => {

  return (
    <React.Fragment>
      <Route exact path="/users" component={UsersListTable} /> 
      <Route exact path="/" component={UsersListTable} /> 

      <Route exact path="/users/add" component={AddNewUser} /> 
    </React.Fragment>
  ); 
  
}

export default UsersPage;