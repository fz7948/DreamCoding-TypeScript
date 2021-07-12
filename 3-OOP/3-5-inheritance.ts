{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 상속하지 않았을 경우 -> CaffeLatteMachine child를 만들기 위해 중복 코드들을 여러번 다시 써야함
  //   class CaffeLatteMachine {
  //     private static BEANS_CRAMM_PER_SHOT: number = 7;
  //     private coffeeBeans: number = 0;

  //     private constructor(coffeeBeans: number) {
  //       this.coffeeBeans = coffeeBeans;
  //     }
  //     static makeMachine(coffeeBeans: number): CaffeLatteMachine {
  //       return new CaffeLatteMachine(coffeeBeans);
  //     }

  //     fillCoffeeBeans(beans: number) {
  //       if (beans < 0) {
  //         throw new Error("value for beans should be greater than 0");
  //       }
  //       this.coffeeBeans += beans;
  //     }

  //     clean() {
  //       console.log("cleaning the machine...");
  //     }

  //     private grindBeans(shots: number) {
  //       console.log(`grinding beans for ${shots}`);
  //       if (this.coffeeBeans < shots * CaffeLatteMachine.BEANS_CRAMM_PER_SHOT) {
  //         throw new Error("Not enough coffee beans!");
  //       }
  //       this.coffeeBeans -= shots * CaffeLatteMachine.BEANS_CRAMM_PER_SHOT;
  //     }

  //     private preheat(): void {
  //       console.log("heating up...");
  //     }

  //     private extract(shots: number): CoffeeCup {
  //       console.log(`Pullung ${shots} shots...`);
  //       return {
  //         shots: shots,
  //         hasMilk: false,
  //       };
  //     }

  //     makeCoffee(shots: number): CoffeeCup {
  //       this.grindBeans(shots);
  //       this.preheat();
  //       const coffee = this.extract(shots);
  //       return { ...coffee, hasMilk: true };
  //     }
  //   }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_CRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

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

    private extract(shots: number): CoffeeCup {
      console.log(`Pullung ${shots} shots...`);
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // 자식 클래스 생성자는 부모 클래스(super를 호출해야됨)
      super(beans);
    }
    // CoffeeMachine의 생성자가 private면 자식 클래스를 생성할 수 없다 -> public, protected로 생성자를 써야한다
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "SSSS");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
