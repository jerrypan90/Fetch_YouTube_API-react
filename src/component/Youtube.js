import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';

import Search from "./Search";
import List from "./List";

const API = process.env.REACT_APP_YT_API_KEY;
let result = 10;

class Youtube extends Component {
   constructor(props){
      super(props);
      this.state = {
         ytList: []
      };
      this.getVideo = this.getVideo.bind(this);
   }
   
   getVideo(input) {
      let finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&type=video&key=${API}&maxResults=${result}`;

      axios.get(finalURL)
      .then((res) => {
         const ytList = res.data.items.map(obj => obj.id.videoId)
         this.setState({ytList});
      })
      .catch((err) => {
         console.log(err);
      })
   }

   render() { 
      return (
         <div>
            <div className="jumbotron jumbotron-fluid">
               <div className="container">
                  <h1 className="display-3">Welcome</h1>
                  <p className="lead">{this.props.profile.nickname.toUpperCase()}</p>
               </div>
            </div>
            <div className="container">
               <Search getVideo={this.getVideo}/>
               <List ytList={this.state.ytList} />
            </div>
         </div>
      )
   }
}

export default Youtube;