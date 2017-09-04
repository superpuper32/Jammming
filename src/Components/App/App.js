import React, { Component } from 'react';
import Spotify from '../../util/Spotify';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: '',
        artist: '',
        album: ''
      }],
      playlistName: '',
      playlistTracks: [{
        name: '',
        artist: '',
        album: ''
      }]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    this.setState({playListTracks: this.state.playlistTracks});
    }

  removeTrack(track) {
    this.setState({playlistTracks: ''});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    Spotify.savePlaylist().then(playlistName => {
      this.setState({
        playlistName: 'New Playlist'
      })
    }

    )
    [uri: trackURIs]
  }

  search(term) {
    Spotify.search(term).then(tracks => {
      this.setState({
        searchResults: traks
      })
    })
    }
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
