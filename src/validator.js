class Validator {
  static validate(sudoku) {
    const validator = new Validator

    return validator.validate(sudoku)
  }

  validate(sudoku) {
   let data = sudoku.split(/[|\n\s]/)
   // splits every line n is enter and s is space
    for(let i = data.length; i--;){
        if(data[i].length != 1) { //gets rid of lines with + and minus
            data.splice(i,1) // removes 1
        }

    }
//    console.log(data.length)
//    console.log(data)
      let row = horizontalArrayToRows(data,9) //horizontal row with data up to 9 numbers
//      console.log(row)

//      console.log("Sudoku is valid.")
      var is_valid_or_incomplete = columnsCheck(row)
        if(is_valid_or_incomplete == true){
            console.log("Sudoku is valid but incomplete.")
        }
        else{
           var valid_or_not_row = ValidRow(data)
           var valid_or_not_column = ValidRow(ColumnSplit(data))
           var valid_or_not_grids = GridValidator(row)
               if((valid_or_not_row == true)&&(valid_or_not_column == true)&&(valid_or_not_grids == true)){
               console.log("Sudoku is valid.")
             }
             else{
             console.log("Sudoku is invalid.")
             }
        }
       }
   }

function horizontalArrayToRows(array, elements) {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < array.length; i++) {
        if (i % elements === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(array[i]);
    }
// Matrix is a 2D array
    return matrix;
}



module.exports = Validator



function columnsCheck(row, rowchecker) {
    for ( y = 0; y < row.length; y++ ){ // first dimension for loop increments till 9 cuz row is data,9
        for(x = 0; x < row[y].length; x++){ // 2nd dimension for loop basically adds to matrix of 2D array up to 9 as well
            if(rowchecker == row[y][x]){
            return true

            }
        }
    }
    return false
}

function GridValidator(arr) {
let temp = 0;
let temp_index_x = 0;
let temp_index_y = 0;
    for (var FIRST_DIMENSION = temp_index_x; FIRST_DIMENSION < temp_index_x + 3; FIRST_DIMENSION++) {
        for (var SECOND_DIMENSION = temp_index_y; SECOND_DIMENSION < temp_index_y + 3; SECOND_DIMENSION++) {
                temp += arr[FIRST_DIMENSION][SECOND_DIMENSION]
        }
    temp_index_y += 3;

    if (temp != 45) {
    return false;
    }
    temp = 0;
       if(temp_index_x == 9) break;
temp_index_x += 3;
temp_index_y = 0;}
return true;
}


function ValidRow(OneDarray){
    for(l = 0; l < 9; l++){
        let temp = 0;
        for(k = 0; k < 9; k++){
            temp += OneDarray[l * 9 + k] // set to 1D array 81 elements if doesnt add up to 45 then false
        }
        if(temp != 45){
        return false;
        }
    }
    return true;
}

function ColumnSplit(column){
    let columns = [];
    for(y = 0; y < 9; y++){
    columns.push(column[y])
    columns.push(column[y + 9])
    columns.push(column[y + 18])
    columns.push(column[y + 27])
    columns.push(column[y + 36])
    columns.push(column[y + 45])
    columns.push(column[y + 52])
    columns.push(column[y + 63])
    columns.push(column[y + 72])

    }
return columns
}

// this checks pretty much that there are the right amount of columns in an array of 81 elements



