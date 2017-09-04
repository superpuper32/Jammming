import React from 'react';
import Track from './Track';
import './TrackList.css';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
      {this.props.tracks.map(track => (
        <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />
      ))}
    <!-- You will add a map method that renders a set of Track components  -->
</div>
    );
  }
}

export default TrackList;
