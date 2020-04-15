import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Homepage/HomePage-Component';
import './App.css';


const Hats = (props) => {
  console.log(props)
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>

  );
}
const TopicPage = () => (<h1>Topic Page</h1>)
const TopicDetail = () => (<h1>TopicDeatil</h1>)



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
        <Route eaxct path='/topics' component={TopicPage} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
