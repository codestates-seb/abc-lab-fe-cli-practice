const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO
  let even = [];
  for(let i=1; i<=upTo; i++){
    if(i%2===0){
      even.push(i);
    }
    
  }
  return even;
}

module.exports = getListMultiplesOfTwo;
