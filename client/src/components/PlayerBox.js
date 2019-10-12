import React from 'react';
import PlayerCards from './PlayerCards';
import axios from 'axios';

class PlayerBox extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(response => this.setState({
                players: response.data
            }))
            .catch(err => console.log(err))
    }
    render() {
        return <div className="boxForPlayers">
            {this.state.players.map((x,index)=>{
                return <PlayerCards key={index} player={x} />
            })}
        </div>
    }
}

export default PlayerBox;