import React from 'react';
import './SearchResults.css';

import TrackList from './../TrackList/TrackList';

export class SearchResults extends React.Component {




  render() {
    console.log('SearchResults.js ');
    console.log(this.props.searchResults);
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval="false"></TrackList>
      </div>
        )
  }
}

export default SearchResults;
