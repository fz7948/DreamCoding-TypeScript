{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  // 나랑 의사소통하려면 나는 이런이런 규약이 있어 나는 이런 행동을 할 수 있어라고 명시해놓는 계약서같은 의미
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_CRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // makeMachine을 이용하면 CoffeeMachine이라는 오브젝트를 리턴하는데 CoffeeMachine이라는 타입으로 오브젝트를 받게되면 오브젝트 안에 있는
  // 퍼블릭 함수들을 모두 이용할 수 있다
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);
  // 추상화는 사용자가 함수를 사용하기 편리하도록 내부의 복잡한 함수들을 노출시키지 않고 사용하기 위한 함수만 노출시키는 방식
  // -> 캡슐화와는 다른 점이 추상화는 사용자의 편의를 위해 함수 노출을 최소화하지만 캡슐화는 변하면 안되는 데이터들의 보호를 위해 정보를 은닉

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  // 인터페이스로 다시 타입을 제한해서 받게되면 이 인터페이스 안에서 정의된 함수들만 이용할 수 있다
  maker2.fillCoffeeBeans(32);
  maker2.makeCoffee(2);
  maker2.clean();

  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
  pro.makeCoffee();
}
