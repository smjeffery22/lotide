const assertEqual = require("./assertEqual");

const tail = function(data) {
  return data.slice(1);
};

module.exports = tail;