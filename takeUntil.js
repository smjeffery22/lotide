// Create a function that will take two arguments
//  1. The array to work with
//  2. The callback
// Return a "slice of the array with elements taken from the beginning"
// Until the callback returns a truthy value
//  Callback should only be provided one value

const takeUntil = function(array, callback) {
  const results = [];

  for (const element of array) {
    if(!callback(element)) {
      results.push(element);
    } else {
      break;
    }
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);