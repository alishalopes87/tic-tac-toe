import React, { Component } from 'react'
import Board from './Board'

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],

        }
    }


    render() {

        return (
            <div className="game">
            <div className="game-board">
                <Board 
                />
            </div>
            </div>
        );
    }
}

export default Game;

