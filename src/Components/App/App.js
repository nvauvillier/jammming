import React, { Component } from 'react';
import './App.css';
import Playlist from './../Playlist/Playlist'
import SearchBar from './../SearchBar/SearchBar'
import SearchResults from './../SearchResults/SearchResults'
import Spotify from './../../util/Spotify'

export class App extends Component {

  constructor(props) {
  super(props);
  this.state = {

    searchResults:[
      {name:'La Boheme',
      artist:'Charles Aznavour',
    album:'Best Of',
  id:1234},
  {name:'Allumer le feu',
  artist:'Johnny Halliday',
  album:'Integrale',
  id:12345}],
  playlistName:'Ma playlist',

  playlistTracks:[
    {name:'Obladi',
  artist:'Beatles',
  album:'Yellow submasrine',
  id:123},
  {name:'Penny Lane',
  artist:'Beatles',
  album:'Magical Mistery Tour',
  id:124}]
  }



this.addTrack=this.addTrack.bind(this);
this.removeTrack=this.removeTrack.bind(this);
this.updatePlaylistName=this.updatePlaylistName.bind(this);
this.savePlaylist=this.savePlaylist.bind(this);
this.search=this.search.bind(this);
}

  addTrack(track){

    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {

      return;
    }
    else   {
      //console.log(track);
      //console.log(this.state.playlistTracks);
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks : this.state.playlistTracks})}
  }

  removeTrack(track){
  //  console.log(this.state.playlistTracks);
  //  console.log(track);
    this.setState({playlistTracks : this.state.playlistTracks.filter(tracks => tracks.id !== track.id)})

  }

updatePlaylistName(name){
   this.setState({playlistName : name});

}

savePlaylist(){
let trackURIs;
trackURIs=this.state.playlistTracks.map(track => track.uri)

Spotify.savePlaylist(this.state.playlistName,trackURIs);
this.setState({playlistName : 'New Playlist'});
this.setState({playlistTracks : []});


}

search(searchTerm){
console.log(searchTerm);

Spotify.search(searchTerm);
}

  render() {

    console.log(this.state.searchResults);
    return (
  <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}></SearchBar>
    <div className="App-playlist">
    <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}></SearchResults>
    <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}></Playlist>
    </div>
  </div>
</div>


    );
  }
}

export default App;
