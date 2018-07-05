import React, { Component } from 'react';

import '../App.css';

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {

      };
      this.onLogin = this.onLogin.bind(this);
      this.onLogout = this.onLogout.bind(this);
   }

   onLogin() {
      this.props.onLogin();
   }

   onLogout() {
      this.props.onLogout();
   }

   clickHome() {
      window.location.reload();
   }

   render() { 
      return (
         <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container">
               <a className="navbar-brand" onClick={this.clickHome}>YT Search</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="navbar-collapse collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                  {/* <li className="nav-item active">
                     <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                  </li> */}
                  <li className="nav-item">
                     {this.props.accessToken === '' ? (
                     <a className="nav-link" onClick={this.onLogin}>Login</a>
                     ) : (
                     <a className="nav-link" onClick={this.onLogout}>Logout</a>
                     )}
                  </li>
               </ul>
               </div>
            </div>
         </nav>
      )
   }
}

export default Header;