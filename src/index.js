
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix === []) return [];
  let result = [];

  matrix.forEach((item, index) => {
    index % 2 === 0 ? result.push(item) : result.push(item.reverse());
  });
  return result.flat();
}
