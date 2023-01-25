const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  const List=[];
  for (let i=2; i<=upTo; i+=2) {
    List.push(i);
  }
  return List;
}

module.exports = getListMultiplesOfTwo;
