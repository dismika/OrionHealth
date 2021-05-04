import React from 'react';
import { Route } from 'react-router-dom'

import ShowMedication from './show'

const MedicationsPage = () => {

	
  return (
    <React.Fragment>
    	<Route exact path="/medication/view/:user_id" component={ShowMedication} /> 
      
    </React.Fragment>
  ); 
  
}

export default MedicationsPage;