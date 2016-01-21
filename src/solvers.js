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
  var board = new Board({n:n});
  var matrix =[];
    for (var i=0;i<board.get('n');i++){
     matrix.push(board.get(i));
    }
  for(var i=0;i<matrix.length;i++){
    matrix[i][i] =1;
  }
  return matrix;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var matrix =[];
  var counter =0;
    for (var i=0;i<board.get('n');i++){
     matrix.push(board.get(i));
    }

  function addRow (matrix, row, hasConflict, startingSpace) {
    startingSpace = startingSpace || 0;
    if(row === matrix.length-1) {
      counter++;
      return;
    }
    var found = false;var tempI;
    if (hasConflict){
      var col = matrix[row].indexOf(1);
      matrix[row][matrix[row].indexOf(1)] = 0;
    }
    var col = col || 0;
    for(var i=col;i<matrix.length;i++){
      matrix[row][i+startingSpace] = 1;
      var tempBoard = new Board(matrix);
      var checkForConflicts = tempBoard.hasAnyRowConflicts() || tempBoard.hasAnyColConflicts(); 
      if (!checkForConflicts){
        found = true;
        return addRow(matrix, row+1, false);
      }
    }
    if (!found){
      return addRow(matrix, row-1, true );
    }

  }

  for(var i = 0; i<n; i++){
    addRow(matrix, 0, false, i);

  }
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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
