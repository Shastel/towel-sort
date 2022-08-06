
// You should implement your task here.


module.exports = function towelSort (matrix) {

  let arraySort  = [];

  if (typeof matrix != 'undefined') {

    matrix.forEach((element, index) => {

      (index % 2 == 0) ? element.sort((a,b) => a-b) : element.sort((a,b) => b - a);

      arraySort.push(...element);

    });
  };

  return (arraySort);
}
