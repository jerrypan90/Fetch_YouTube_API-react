import React, { Component } from 'react';

class Search extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
      this.submitSearch = this.submitSearch.bind(this);
   }

   submitSearch(e){
      e.preventDefault();
      let input = this.refs.input.value;
      this.props.getVideo(input);
      this.refs.input.value = '';
   }

   render() { 
      return (
         <form className="form-control" onSubmit={this.submitSearch}>
            <label>What video are you looking for?</label>
            <input className="form-control" type="search" ref="input" placeholder="Enter Text..." />
         </form>
      )
   }
}

export default Search;