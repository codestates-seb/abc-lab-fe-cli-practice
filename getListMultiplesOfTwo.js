const range = require("range"); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  let result = [];

  for (let i = 2; i <= upTo; i += 2) {
    result.push(i);
  }

  return result;

  // TODO
}

module.exports = getListMultiplesOfTwo;
