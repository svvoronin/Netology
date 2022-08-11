let players = ["x", "o"];
//let activePlayer = 0;

// Create "startGame" function to create/initialize a play field:
function startGame() {
  activePlayer = 0;
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  arr_size = board.length;
  renderBoard(board);
}

// Create function "Click" to fill in cells of the play field when clicked:
function click(row, col) {
  // Fill in the cell with either "x" or "o"
  board[row][col] = players[activePlayer];
  renderBoard(board);

  //Check all the rows of the play field, calculate number of corresponding cells clicked and return the congrats message if needed:
  // Rows:
  for (let i = 0; i < arr_size; i++) {
    count = countElements(board[i], players[activePlayer]);
    if (count == arr_size) {
      showWinner(activePlayer);
    }
  }

  //Check all the columns of the play field, calculate number of corresponding cells clicked and return the congrats message if needed:
  //Columns:
  for (let i = 0; i < arr_size; i++) {
    arr = getCol(board, i);
    count = countElements(arr, players[activePlayer]);
    if (count == arr_size) {
      showWinner(activePlayer);
    }
  }

  //Check diagonals (two) of the play field, calculate number of corresponding cells clicked and return the congrats message if needed:
  // Diagonal:
  res = getDiagonal(board, players[activePlayer]);
  if (res.indexOf(arr_size) !== -1) {
    showWinner(activePlayer);
  }

  // Switch a player:
  if (activePlayer + 1 > 1) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
}

// Function to return user defined column of the array:
function getCol(matrix, col) {
  var column = [];
  for (var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][col]);
  }
  return column;
}

// Function to return diagonals of the array:
function getDiagonal(arr, element) {
  diagonal_reversed = arr.map(
    (row, index, self) => row[self.length - 1 - index]
  );
  count_diagonal_reversed = countElements(diagonal_reversed, element);

  diagonal_normal = arr.map((row, index, self) => row[index]);
  count_diagonal_normal = countElements(diagonal_normal, element);

  return [count_diagonal_reversed, count_diagonal_normal];
}

// Function to count number of specific element in the array:
function countElements(arr, element) {
  count = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === element) {
      count += 1;
    }
  }
  return count;
}
