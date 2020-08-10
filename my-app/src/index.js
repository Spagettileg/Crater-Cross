import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Configure a square function component

function Square(props) {
    return (
      <button
        className={"square " + (props.isWinning ? "square-winning" : null)}
        onClick={props.onClick}
        >
        {props.value}
      </button>
    );
  }


// Create gaming board. Squares based on index scoring from 0 to 8

class Board extends React.Component {
  
  // Returned element is split for readability. Parentheses added so JS
  // doesn't insert a semicolon after return and break the code.
  renderSquare(i) {
    return ( 
      <Square
        isWinning={this.props.winningSquares.includes(i)}
        key={"square " + i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  // Text produced to confirm the Crater-Cross champion
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game status and user information

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      isDescending: true
    };
  }
  
  // Incidence of 'X' & 'O' and xIsNext boolean allows for player turns
  // Location of users sqaure selection captured as (col / row) array 
  handleClick(i) {
    const locations = [
      [1, 1],
      [2, 1],
      [3, 1],
      [1, 2],
      [2, 2],
      [3, 2],
      [1, 3],
      [2, 3],
      [3, 3],
    ];
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // function returns early if game won or Square already filled 
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        location: locations[i]
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  
  sortHistory() {
    this.setState({
      isDescending: !this.state.isDescending
    });
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + " >> " + history[move].location :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
          {move === this.state.stepNumber ? <i>{desc}</i> : desc}
          </button>
        </li>
        );
    });
    
    let status;
    if (winner) {
      status = 'winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div>
      <div className="game">
        <div className="game-board">
          <Board
            winningSquares={winner ? winner.line : []}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
      </div>
      <div className="game">
        <div className="game-info">
            <div className="game-status">{status}</div>
            <ol>{this.state.isDescending ? moves : moves.reverse()}</ol>
            <button onClick={() => this.sortHistory()}>
              Sort by: {this.state.isDescending ? "Descending" : "Ascending"}
            </button>
          </div>
      </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// Winning combinations built with use of index scoring
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
