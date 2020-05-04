import React, { useState, useEffect} from 'react';
import {BrowserRouter as HashRouter,Router, Route} from 'react-router-dom';
import {HomePage} from './pages/homePage';



function App() {
  
 
  return ( 
    // <Router>
    <HashRouter basename="/pokemon"> 
      <Route exect path ="/testPekemons" component ={HomePage}/>
    </HashRouter> 
    // </Router>  
          
  );
}

export default App;

