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
  board.get(0)[0] = 1;
  function addRows(board, row, hasConflict) {
    var matrix =[];
    for (var i=0;i<board.get('n');i++){
     matrix.push(board.get(i));
    }
    var countFilledRows;
   
    if (row >= board.get('n')) return matrix;
    var found = false;
    if(hasConflict){
      var column = board.get(row).indexOf(1) + 1;
    }
    var column = column || 0;
    for(column=0;column< board.get('n');column++){
      board.get(row)[column] = 1;
      var rowConflict = board.hasAnyRowConflicts();
      var colConflict = board.hasAnyColConflicts();
      if (!rowConflict && !colConflict){
        found = true;
        return addRows(board, row+1);
      }
    }
    if(!found){
      return addRows(board, row-1, true);
    } 
  }

  return addRows(board, 0, false);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
