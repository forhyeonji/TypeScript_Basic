import sum from './10-3-module1.js';
// default로 export한 함수는 내 마음대로 이름 붙여도 됨
// default가 아닌 함수는 import { 원래이름 } 으로 import 한다.

/**
 * import * as calculator form '..' 하면
 * calculator.sum
 * calculator.divide
 * calculator.a : a라는 변수에 접근
 */

console.log(sum(1, 2));
