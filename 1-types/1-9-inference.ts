{
  /**
   * Type Inference
   * 선언과 동시에 값을 할당하면 타입을 유추한다.
   * 추천 안 함..! 최대한 타입을 꼬박꼬박 적자!
   */
  let text = 'hello';
  function print(message = 'hello') {
    console.log(message);
  }

  function add(x: number, y: number) {
    // 리턴 타입이 없어도 추론이 된다.
    return x + y;
  }
  const result = add(1, 2); // result 는 number 가 된다.
}
