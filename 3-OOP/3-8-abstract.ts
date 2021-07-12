{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    // abstract를 붙이면 CoffeeMachine 자체로는 오브젝트를 만들 수 없다
    private static BEANS_CRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {  -> abstract때문에 에러 발생
    //   return new CoffeeMachine(coffeeBeans);
    // }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_CRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_CRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    protected abstract extract(shots: number): CoffeeCup;
    // 자식 클래스에서 달라질 수 있는 함수가 있다면 그 함수 앞에 abstract라는 키워드를 붙임
    // -> 자식 클래스마다 다르게 구현 (protected : abstract 앞에 붙임)
    //   console.log(`Pullung ${shots} shots...`);
    //   return {
    //     shots: shots,
    //     hasMilk: false,
    //   };
    // abstract에서는 구현사항을 적지 않는다

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
    // makeCoffee(shots: number): CoffeeCup {
    //   const coffee = super.makeCoffee(shots);
    //   return {
    //     ...coffee,
    //     hasMilk: true,
    //   };
    // }
    // super.makeCoffee(shots) 하지 않아도 abstract되어 CaffeLatteMachine안에서 makeCoffee 함수를 사용 가능
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    // 생성자 안에 super를 하지 않아도됨
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  //   const machine = new CoffeeMachine(23);
  // -> CoffeeMachine은 abstract되어 클래스를 만들 수 없다

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("------------------------");
    machine.makeCoffee(1);
  });
}
