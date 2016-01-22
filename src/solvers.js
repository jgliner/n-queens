/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // var solution = undefined; //fixme

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // dec new counter, instantiate new n x n board
  var counter = 0;
  var board = new Board({n:n});
  
  //recurse
  var findSolutions = function(row) {
    if (row === n) {
      counter++;
      return;
    }
    // for each square in the next row
    for (var i = 0; i < n; i++) {
      // place
      board.togglePiece(row, i);
      // check for collision
      if (!board.hasAnyRooksConflicts()) {
        findSolutions(row+1);
      }
      // if collision
      board.togglePiece(row, i);
    }
  };


  // create starting row call (always goes to 0)
  findSolutions(0);

  return counter;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // dec new counter, instantiate new n x n board
  var counter = 0;
  var board = new Board({n:n});
  
  //recurse
  var findSolutions = function(row) {
    if (row === n) {
      counter++;
      return;
    }
    // for each square in the next row
    for (var i = 0; i < n; i++) {
      // place
      board.togglePiece(row, i);
      // check for collision
      if (!board.hasAnyQueensConflicts()) {
        findSolutions(row+1);
      }
      // if collision
      board.togglePiece(row, i);
    }
  };


  // create starting row call (always goes to 0)
  findSolutions(0);

  return counter;
};
