{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // static 사용 예제
  Math.abs;
  Math.PI;
  // static으로 class level의 함수를 사용할 수 있기때문에 따로 오브젝트를 생성하지 않아도 함수들을 호출할 수 있다

  class CoffeMaker {
    static BEANS_CRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
      //class 내부에 있는 어떠한 속성값도 필요하지 않기때문에 static을 붙여줄 수 있다
      return new CoffeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMaker.BEANS_CRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeMaker.BEANS_CRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }
  const maker = new CoffeMaker(32);
  const maker2 = new CoffeMaker(16);

  const maker3 = CoffeMaker.makeMachine(3);
  // static을 붙이지 않으면 class level에 있는 함수를 이용할 수 없다
}
