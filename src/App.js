import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <HashRouter>
        <Switch>
          <Route path='/' component={HomePage} exact></Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
