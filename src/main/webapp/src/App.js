import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import RouterMain from 'routers'

import Header from 'shared/header'

const App = () => {
  
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
	    	<RouterMain />
	    </BrowserRouter>
    </div>
  );
}

export default App;
