
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let reverseArray = function(array) {
    let newArr = []
    for (let a = array.length - 1; a >= 0; a--) {
      newArr.push(array[a])
    }
    return newArr;
    }

    if (!matrix) {
      return [];
    } else {
    
    let resultArr = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++){
        if (i === 0) {
      resultArr.push(matrix[i][j])
    } else if (i === 1) {
      resultArr.push(reverseArray(matrix[i])[j])
    } else if (i % 2 === 0) {
      resultArr.push(matrix[i][j])
    } else {
      resultArr.push(reverseArray(matrix[i])[j])
    }
    }
    }
    return resultArr;
  }
  }
