import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import { Login } from './components/login';
import { Register } from './components/register';
import { HomePage } from './components/homepage'

export function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='/homepage' Component={HomePage}/>
        </Routes>
      </div>
    </Router>
  );
}