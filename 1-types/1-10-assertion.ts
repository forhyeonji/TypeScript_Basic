{
  /**
   * Type Assertions 💩
   */

  function jsStrFunc(): any {
    return 2;
    // return 'hello';
    // string 임에도 return 타입이 any 라서 아래의 result.length 같은 메서드를 쓸 수 없다.
  }
  const result = jsStrFunc();
  // string 타입이라고 장담을 해줘야 메서드 사용 가능!
  // 반대로 리턴타입이 string 이 아님에도 string 이라고 장담을 하니 컴파일 오류는 나지 않지만
  // 대신 undefine 이 나오거나 서버가 죽을 수 있다.
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 서버 죽음 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // !는 ?과 다르게 완전완전 확실해!! 라는 의미
  numbers!.push(2); // 😱

  const button = document.querySelector('class')!;
}
