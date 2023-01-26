const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO
  let arr = []
  for (let i = 2; i <= upTo; i += 2) {
    arr.push(i)
  }



  
  return arr
}

module.exports = getListMultiplesOfTwo;
