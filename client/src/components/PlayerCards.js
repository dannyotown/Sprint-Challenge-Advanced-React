import React from 'react';

class PlayerCards extends React.Component {
  render() {
    return <div className="cardBox">
        <h3>{this.props.player.name}</h3>
        <hr/>
        <p>Country: {this.props.player.country}</p>
        <p>How Many Times Has This User Been Searched?</p>
        <p>{this.props.player.searches}</p>
    </div>
  }
}

export default PlayerCards;