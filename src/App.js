import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {HomePage} from './pages/homePage';



function App() {
  
 
  return (
    <Router>
      <Route exect path ='/pokemons' component ={HomePage}>    
    </Route>
    </Router>
    
    
  );
}

export default App;

