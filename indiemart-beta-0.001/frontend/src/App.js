import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {CreateStore} from './components/CreateStores/index';
import {CreateUser} from './components/CreateUsers/index';

function App() {
  return (
    <Router>
      <div className="container p-4">
        <Route path="/create" component={CreateStore}/>
        <Route path="/register" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;