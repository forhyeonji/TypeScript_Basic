{
  // Array
  const fruits: string[] = ['🍑', '🍎'];
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    // readonly 옵션은 string[] 같은 [] 타입에만 적용 된다.
  }

  // Tuple : 서로 다른 타입을 배열에 담을 수 있다. => interface, type alias, class 에 사용 추천
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
