class TicTacToe {
  constructor() {
    this.board = ''
    let WIN_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]
  }

  displayBoard() {
    //prints current board representation based on board instance variable
  }

  inputToIndex(input) {
    //pass user input (clicking on a box) and reutnr the corresponding index of the board property array
  }

  move(idx, token) {
    //take in two arguments - the index of the space the player chose and the player's token
  }

  positionTaken() {
    //evaluates the user's desired move against tic tac toe board & checks to see if position is already occupied
    //checks index values 
    //if the space is free, the method should return false (position is NOT taken)
    //else return true
  }

  validMove(position) {
    //checks position, return true if move is valid and false if not
    //valid move must be 1) on game board and 2) not already filled
  }

  turnCount() {
    //returns the number of turns that have been played based on the board property 
  }

  currentPlayer() {
    //use the turncount method to determine if it's x or o turn
  }

  turn() {
    //player clicks on the box
    //take that input
    //translate input to an index value
    //if the move is valid, make the move and display the board
    //if move is invalid, ask for new move until valid move is received 
  }

  won() {
    //should return false if there is no win combination present on board
    //return an array containing the winning cobination indexes if there is a win
    //use WIN_COBINATIONS constant in this method
  }

  full() {
    //should return true if every element in the board contains either an x oor an o
  }

  draw() {
    //returns true if the board is full and has not been won
    //otherwise returns false 
  }

  over() {
    //returns true if the board has been won or is full (draw)
  }

  winner() {
    //if there is a winning board, this method returns either X or O has won the game
  }

  play() {
    //until the game is over
      //take turns
    //end

    //if the game was won
      //congratulate the winner
    //else if the game was a draw 
      //tell the players it ended in a draw
    
    //end
  }
}