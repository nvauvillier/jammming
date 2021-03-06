import React from 'react';
import './Track.css';

export class Track extends React.Component {

  constructor(props) {
  super(props);
  this.addTrack=this.addTrack.bind(this);
  this.removeTrack=this.removeTrack.bind(this);
}


  renderAction(){
    //console.log(this.props.isRemoval);
    if (this.props.isRemoval==="true") {return (<a className="Track-action" onClick={this.removeTrack}>-</a>)}
    else {return (<a className="Track-action" onClick={this.addTrack}>+</a>)}
  }

addTrack(track){
  //console.log(this.props.onAdd);
  this.props.onAdd(this.props.track)
}

removeTrack(track){
  this.props.onRemove(this.props.track)

}

  render() {
    //console.log(this.props.track);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}


      </div>
        )


  }
}

export default Track;
