const range = require("range"); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  let result = [];
  // TODO

  for (let i = 2; i <= upTo; i += 2) {
    result.push(i);
  }

  return result;
}

module.exports = getListMultiplesOfTwo;
