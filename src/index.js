module.exports = function solveSudoku(matrix) {
	// Used Backtracking algorithm for solve Sudoku
	function findEmptyLocation(arr, l){
		for(var row = 0; row < 9; row++){
			for(var col = 0; col < 9; col++){
				if(arr[row][col] == 0){
					l[0] = row;
					l[1] = col;
					return true;
				}
			}
		}
		return false;
	}

	function usedInRow(arr, row, num){
		for(var i = 0; i < 9; i++){
			if(arr[row][i] == num){
				return true;
			}
		}
		return false;
	}

	function usedInCol(arr, col, num){
		for(var i = 0; i < 9; i++){
			if(arr[i][col] == num){
				return true;
			}
		}
		return false;
	}

	function usedInBox(arr, row, col, num){
		for(var i = 0; i < 3; i++){
			for(var j = 0; j < 3; j++){
				if(arr[i+row][j+col] == num){
					return true;
				}
			}
		}
		return false;
	}

	function checkLocationIsSafe(arr, row, col, num){
		return !usedInRow(arr, row, num) && !usedInCol(arr, col, num) && !usedInBox(arr, row - row%3, col - col%3, num);
	}

	function solution(arr){
		var l = [0, 0];

		if(!findEmptyLocation(arr, l))
			return true;

		var row = l[0];
		var col = l[1];

		for(var num = 1; num < 10; num++){
			if (checkLocationIsSafe(arr, row, col, num)) {
				arr[row][col] = num;

				if(solution(arr))
					return true;

				arr[row][col] = 0;
			}
		}

		return false;
	}

	solution(matrix);
	return matrix;
}
