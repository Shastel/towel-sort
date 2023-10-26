
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  const sortedList = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      sortedList.push(...matrix[i]);
    } else {
      sortedList.push(...matrix[i].reverse());
    }
  }

  return sortedList;
}
