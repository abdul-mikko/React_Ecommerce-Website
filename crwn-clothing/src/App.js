import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './Pages/Homepage/HomePage-Component';
import CollectionArray from './Pages/Collection/Collection-Array-Components'
import Header from '../src/Components/Header/Header.component'
import SignInandSignUp from './Pages/Sign_In_And_Sign_Up/Sign_In_And_Sign_Up'
import { auth, createUserProfileDocument } from './Firebase/Firebase_Util'




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubcribeFromAuth = null;
  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(Snapshot => {
          this.setState({
            currentUser: {
              id: Snapshot.id,
              ...Snapshot.data()
            }
          })
          console.log(this.state)
        })

      }
      else {
        this.setState({ currentUser: userAuth });
      }
    })
  }
  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={CollectionArray} />
          <Route path='/signin' component={SignInandSignUp} />
        </Switch>
      </div>
    );

  }

}

export default App;
