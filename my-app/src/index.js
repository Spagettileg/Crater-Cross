import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Configure a square function component

function Square(props) {
    return (
      <button
        className="square"
        onClick={props.onClick}
        >
        {props.value}
      </button>
    );
  }


// Create gaming board. Squares based on index scoring from 0 to 8

class Board extends React.Component {
  // Constructor helps control the Squares by passing a prop to each Square
  // User options = X, O or null (blank)
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
  
  // Returned element is split for readability. Parentheses added so JS
  // doesn't insert a semicolon after return and break the code.
  renderSquare(i) {
    return ( 
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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
