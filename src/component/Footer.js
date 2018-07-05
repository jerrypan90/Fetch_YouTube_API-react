import React, { Component } from 'react';

import '../App.css';

class Footer extends Component {
   render() { 
      return (
         <footer className="footer">
            <div className="container">
               <span className="text-muted">YT Search &#169; {new Date().getFullYear()}</span>
            </div>
         </footer>
      )
   }
}
 
export default Footer;