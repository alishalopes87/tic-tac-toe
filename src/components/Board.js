import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import { fetchBoard } from '../actions'

class Board extends React.Component {

    componentDidMount(){
       this.props.fetchBoard();
    }
 
    
    render(){
        console.log(this.props)

    const board = this.props.board.map((row, rowIndex)=>{

    return(
        <div key={rowIndex} className="board-row">
            {row.map((square, index)=>{
             return <Square onClick={ e => {
                this.handleSelect(index,rowIndex)
             } } value={square}key={index}/>
            })}
        </div>
    )
    })

        return(
        <div>
            { board }
        </div>
        
    ) 
}

}
const mapStateToProps = (state) => {
    return { board: state.board }
}

export default connect(
    mapStateToProps,
    {fetchBoard: fetchBoard}
    )(Board);