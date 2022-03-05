
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == null){
    return []
  }
  let resArr = []
  let colIndex;
 for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
     if(i % 2 == 0){
       colIndex = j;
     }
     else{
       colIndex = matrix[i].length - j - 1;
     }
     resArr.push(matrix[i][colIndex]);
  }
 }
 return resArr;
}
