import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './component/Header';
import Youtube from './component/Youtube';
import Footer from './component/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: '',
      profile: {}
    }
    this.showLock = this.showLock.bind(this);
    this.logout = this.logout.bind(this);
  }

  static defaultProps = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
      // console.log(authResult);
      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if(error) {
          console.log(error);
          return;
        }
        // console.log(profile);
        this.setProfile(authResult.accessToken, profile);
      });
    });
    this.getProfile();
  }

  setProfile(accessToken, profile){
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setState({ 
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))  
    });
  }

  getProfile(){
    if(localStorage.getItem('accessToken') != null) {
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        //console.log(this.state);
      });
    }
  }

  showLock() {
    this.lock.show();
  }

  logout() {
    this.setState({ 
      accessToken: '',
      profile: {}
    }, () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    });
  }

  render() {
    let loginStatus;

    if(this.state.accessToken){
      loginStatus = <Youtube profile={this.state.profile} />
    } else {
      loginStatus = <div className="container">Please Login to use YouTube Search</div>
    }

    return (
      <div>
        <Header {...this.state} onLogin={this.showLock} onLogout={this.logout} />
        {loginStatus}
        <Footer />
      </div>
    );
  }
}

export default App;
