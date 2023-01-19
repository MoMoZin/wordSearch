const wordSearch = (letters, word) => {
  if (!letters.length) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = letters[0].map((_, colIndex) => letters.map(row => row[colIndex]).join(''));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  const horizontalReverse = letters.map(ls => ls.reverse().join(''));
  for (l of horizontalReverse) {
    if (l.includes(word)) return true;
  }

  const verticalReverse = letters[0].map((_, colIndex) => letters.map(row => row[colIndex]).reverse().join(''));
  for (l of verticalReverse) {
    if (l.includes(word)) return true;
  }

  // // console.log("letters:", letters);
  // const diagonalJoin = [];
  // const colCount = letters[0].map((_, colIndex) => colIndex);
  // console.log("colCount: ", colCount);
  // colCount.forEach(colIndex => {
  //   const innerArray = generateInner(letters, colIndex);
  //   console.log("innerArray: ", innerArray);
  //   diagonalJoin.push(innerArray);
  // });

  // console.log('diagonalJoin:', diagonalJoin);
  // // letters.forEach(l => console.log(l))

  return false;
};

// const generateInner = (array, colIndex) => {
//   const colLength = array[0].length;
//   const innerArray = [];
//   let count = 0;
//   array.forEach(row => {
//     let currentIndex = colIndex + count;
//     let currentVal = row[currentIndex];
//     if (currentIndex <= colLength - 1) {
//       count++;
//       innerArray.push(currentVal);
//     }
//   });
//   return innerArray;
// };

const result = wordSearch([
  ['C', 'E', 'C', 'F'],
  ['S', 'A', 'I', 'N'],
  ['Y', 'F', 'T', 'F'],
  ['H', 'M', 'J', 'A'],
], 'CAT');

module.exports = wordSearch;