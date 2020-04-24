import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './Pages/Homepage/HomePage-Component';
import CollectionArray from './Pages/Collection/Collection-Array-Components'
import Header from '../src/Components/Header/Header.component'
import SignInandSignUp from './Pages/Sign_In_And_Sign_Up/Sign_In_And_Sign_Up'
import { auth, createUserProfileDocument } from './Firebase/Firebase_Util'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action';



class App extends React.Component {


  unsubcribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(Snapshot => {
          setCurrentUser({

            id: Snapshot.id,
            ...Snapshot.data()

          })

        })

      }
      else {
        setCurrentUser(userAuth);
      }
    })
  }
  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={CollectionArray} />
          <Route path='/signin' component={SignInandSignUp} />
        </Switch>
      </div>
    );

  }

}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
