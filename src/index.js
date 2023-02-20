
/* const matrix = [
    [1, 2, 3],
    [4, 5, 6],
  ]; */

module.exports = function towelSort (matrix) {
  let newArr = [];
  
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        newArr.push(matrix[i][j]);
    }
  }
  const sorting = newArr.sort(function(a,b){return a - b});
  return sorting;
};

