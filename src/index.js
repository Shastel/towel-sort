
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {return []}
    let matrix1 = [];

    for (y = 0; y < matrix.length; y++) {
        if ((y % 2) === 0) {
            for (x=0; x < matrix[y].length; x++) {
                z = (matrix[y][x]);
                matrix1.push(z);
            }
        } else {
            for (x = matrix[y].length-1; x >= 0; x--) {
                z = matrix[y][x];
                matrix1.push(z);
            }
        }   
    }
    return matrix1;
}
