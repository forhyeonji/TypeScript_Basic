{
  /**
   * Type Assertions π©
   */

  function jsStrFunc(): any {
    return 2;
    // return 'hello';
    // string μμλ return νμμ΄ any λΌμ μλμ result.length κ°μ λ©μλλ₯Ό μΈ μ μλ€.
  }
  const result = jsStrFunc();
  // string νμμ΄λΌκ³  μ₯λ΄μ ν΄μ€μΌ λ©μλ μ¬μ© κ°λ₯!
  // λ°λλ‘ λ¦¬ν΄νμμ΄ string μ΄ μλμλ string μ΄λΌκ³  μ₯λ΄μ νλ μ»΄νμΌ μ€λ₯λ λμ§ μμ§λ§
  // λμ  undefine μ΄ λμ€κ±°λ μλ²κ° μ£½μ μ μλ€.
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // μλ² μ£½μ π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // !λ ?κ³Ό λ€λ₯΄κ² μμ μμ  νμ€ν΄!! λΌλ μλ―Έ
  numbers!.push(2); // π±

  const button = document.querySelector('class')!;
}
