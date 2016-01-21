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
 
  var sol = [];
  var counter =0;

  function makeMatrix(n){
    var board = new Board({n:n});
    var matrix =[];
    for (var i=0;i<n;i++){
      matrix.push(board.get(i));
    }
    return matrix;
  }
  if (n===1) {return 1;}
  function findSolution(matrix, startRow, startCol) {
    var found = false;
    for (var k = 0; k < n; k++) {
      if (k === startRow) {
        continue;
      }
      for (var l = 0; l < n; l++) {
        matrix[k][l] = 1;
        var tempBoard = new Board(matrix);
        if (!tempBoard.hasAnyRowConflicts() && !tempBoard.hasAnyColConflicts()) {
          found = true;
          break;
        }
        else {
          matrix[k][l] = 0;
        }
      }
    }
    if (found){
      var hasDuplicate = _.some(sol, function (solution) {
        return _.flatten(solution).join('') === (_.flatten(matrix).join(''));
      });
      if (!hasDuplicate){
        sol.push(matrix);
        counter++;
      }
    }
    return;
  }

  for(var i = 0; i<n; i++){
    for (var j = 0; j < n; j++) {
      var newMatrix = makeMatrix(n);
      newMatrix[i][j] = 1;
      findSolution(newMatrix, i, j);
    }
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
