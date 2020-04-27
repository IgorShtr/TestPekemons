import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {HomePage} from './pages/homePage';



function App() {
  
 
  return (
    // <BrowserRouter>
         <Router basename="/TestPekemons">
      <Route exect path ='/TestPekemons' component ={HomePage}>    mp
    </Route>
    </Router>
    // {/* </BrowserRouter> */}
   
    
    
  );
}

export default App;

