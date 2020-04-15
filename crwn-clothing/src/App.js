import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Homepage/HomePage-Component';
import './App.css';
import CollectionArray from './Pages/Collection/Collection-Array-Components'
import Header from '../src/Components/Header/Header.component'






function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={CollectionArray} />

      </Switch>
    </div>
  );
}

export default App;
