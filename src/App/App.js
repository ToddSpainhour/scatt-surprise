import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';
import Navbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import SingleScat from '../components/pages/SingleScat/SingleScat';
import NewScat from '../components/pages/NewScat/NewScat';
import EditScat from '../components/pages/EditScat/EditScat';
import './App.scss';

import Auth from '../components/pages/Auth/Auth';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Auth />
        <Home />
        <NewScat />
        <EditScat />
        <SingleScat />
      </div>
    );
  }
}

export default App;
