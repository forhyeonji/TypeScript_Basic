import { Last } from 'react-bootstrap/esm/PageItem';

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // public
  // private
  // protected
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    public constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(beans: number): CoffeeMachine {
      return new CoffeeMachine(beans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine...πͺοΈ');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating...π₯');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans); // μμμμ μμ±μ λ§λ€λλ λΆλͺ¨μκ² νμν μμ±μλ κ°μ΄ λ§λ€μ΄ μ€λ€! μ΄κ±Έ μ λ¬νλκ² super
    }

    private steamMilk(): void {
      console.log('Steaming some milk...π₯');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // λΆλͺ¨μκ² μλ ν¨μ μ¬μ©ν΄μ λ§λ  μ»€νΌ
      this.steamMilk(); // λνν λ°λ‘ λ§λ€ μ μλ μ°μ 
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      console.log('Add sugar for more sweeter...π¬');
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log('------------------------------');
    machine.makeCoffee(1);
  });
}
