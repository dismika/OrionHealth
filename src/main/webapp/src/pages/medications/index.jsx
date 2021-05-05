import React from 'react';
import { Route } from 'react-router-dom'

import ShowMedication from './show'
import AddNewMedication from './new'

const MedicationsPage = () => {

	
  return (
    <React.Fragment>
    	<Route exact path="/medication/view/:user_id" component={ShowMedication} /> 
    	<Route exact path="/medication/add/:user_id" component={AddNewMedication} /> 
      
    </React.Fragment>
  ); 
  
}

export default MedicationsPage;