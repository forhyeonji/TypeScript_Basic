{
  // Array
  const fruits: string[] = ['π', 'π'];
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    // readonly μ΅μμ string[] κ°μ [] νμμλ§ μ μ© λλ€.
  }

  // Tuple : μλ‘ λ€λ₯Έ νμμ λ°°μ΄μ λ΄μ μ μλ€. => interface, type alias, class μ μ¬μ© μΆμ²
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
