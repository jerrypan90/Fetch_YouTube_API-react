import React, { Component } from 'react';

import '../App.css';

class List extends Component {
   render() { 
      let frame;

      frame = this.props.ytList.map((video, i) => {
         return <iframe
         key= {i}
         title = {i}
         id = "ytFrame"
         width = "560"
         height = "315"
         src = {`https://www.youtube.com/embed/${video}`}
         frameBorder = "0"
         allow = "autoplay; encrypted-media"
         allowFullScreen
         />
      })

      return ( 
         <div className="container" id="mainFrame">
            {frame}
         </div>
      )
   }
}

export default List;