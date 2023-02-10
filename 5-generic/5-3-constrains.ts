{
  /**
   * generic에 조건주기
   */

  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay(): void {
      console.log(`full time!!!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay(): void {
      console.log(`Part time!!!`);
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  // ✨✨✨
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
