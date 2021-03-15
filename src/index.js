
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (typeof matrix !== 'undefined' && matrix.length > 0) {
    matrix.forEach(function(matrixLine, i, arr) {
      if (++i % 2) {
        for (let element of matrixLine) {
          result.push(element);
        }
      } else {
        for (let j = matrixLine.length - 1; j >= 0; j--) {
          result.push(matrixLine[j]);
        }
      }
    });
  }

  return result;
}
