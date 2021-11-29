// ACTUAL FUNCTION
// Take an array and return an array with only the middle element(s)
const middle = function(array) {
  let middleArray = [];
  let middleArrayIndex = Math.floor(array.length / 2);
  
  /*
  * Find the length of the array
  * Array with one or two elements
  *    Return an empty array
  * Array with odd number of elements (% 2 !== 0)
  *    Return an array containing a single middle element
  *    Array length divided by 
  * Array with even number of elements (% 2 === 0)
  *    Return an array containing the two elements in the middle
  */
  if (array.length < 3) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    middleArray.push(array[middleArrayIndex]);
    return middleArray;
  } else {
    middleArray.push(array[middleArrayIndex - 1]);
    middleArray.push(array[middleArrayIndex]);
    return middleArray;
  }
};

module.exports = middle;
