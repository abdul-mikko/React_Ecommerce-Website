import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './Pages/Homepage/HomePage-Component';
import CollectionArray from './Pages/Collection/Collection-Array-Components'
import Header from '../src/Components/Header/Header.component'
import Sign_In_And_Sign_Up from './Pages/Sign_In_And_Sign_Up/Sign_In_And_Sign_Up'





function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={CollectionArray} />
        <Route path='/signin' component={Sign_In_And_Sign_Up} />
      </Switch>
    </div>
  );
}

export default App;
