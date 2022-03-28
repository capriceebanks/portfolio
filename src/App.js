import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';


import { Home } from './pages'
import { NavBar,  } from './components'

const App = () => {
return(
<>
<NavBar />
<Switch>
  <Route exact path='/'><Home /></Route> 
{/* <Route path='/projects'><Projects /></Route>  */}
</Switch> 
{/* <Footer /> */}
</>
)};

export default App;
