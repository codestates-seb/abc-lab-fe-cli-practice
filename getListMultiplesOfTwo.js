const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  let result=[];
  for(let i=1; i<=upTo; i++){
    if(i%2===0){
      result.push(i);
    }
  }
  return result;
}

module.exports = getListMultiplesOfTwo;
