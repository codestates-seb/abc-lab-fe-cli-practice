const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO
  const listMultiplesOfTwo = [];
  for(i=2;i<=upTo;i+=2){ 
    listMultiplesOfTwo.push(i);
  }
  return listMultiplesOfTwo;
}

module.exports = getListMultiplesOfTwo;
