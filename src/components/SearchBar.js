import React from "react";

class SearchBar extends React.Component{
  
   
 handleFromSubmit = (event) => {
    event.preventDefault();
 } 
  
  
  render() {
        return(
            <form onSubmit={this.handleFromSubmit} className="d-flex" role="search">
            <input className="form-control me-5 mb-3" 
            onChange={this.props.searchMovieProp} 
            type="text" 
            placeholder="Search"
        />
          </form>
        )
    }
}

export default SearchBar;