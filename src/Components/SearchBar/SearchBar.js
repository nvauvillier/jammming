import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {

  constructor(props) {
  super(props);
  this.search=this.search.bind(this);
  this.handleTermChange=this.handleTermChange.bind(this);
}

search(searchTerm){
  this.props.onSearch(searchTerm) //?????
}

handleTermChange(e){
  console.log(this.state);

  this.setState({searchTerm : e.target.value});
  this.search(e.target.value);
  //search(this.state.searchTerm);
  //console.log(this.state.searchTerm);
  //this.search(this.state.searchTerm);

}

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>
        )
  }
}

export default SearchBar;
