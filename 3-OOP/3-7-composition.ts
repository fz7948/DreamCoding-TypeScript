{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  // 상속의 문제점
  // 상속의 가장 치명적인 문제는 내가 어떤 부모 클래스의 행동을 수정하게 되면 이 수정된 사항때문에 모든 자식 클래스에 영향을 미칠 수 있는 치명적인 단점이 있다
  // 그리고 새로운 기능을 도입하려 할때 어떻게 상속의 구조를 가져갈지 구조가 복잡해질수록 더 까다로워진다
  // 그리고 제일 큰 문제점은 타입스크립트에서는 한 가지 이상의 부모 클래스를 상속할 수가 없다
  // 예를 들면, CaffeLatteMachine, SweetCoffeeMaker의 함수를 이용하기 위해 두 가지 클래스를 상속받으려 하면 에러가 발생한다

  // 이런 상속의 문제점때문에 composition을 사용하는 것이 좋다
  // Favor COMPOSITION over inheritance

  // composition -> 구성 요소들, 구성을 의미

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_CRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilK(sugarAdded);
    }
  }

  interface MilkFrother {
    makeMilK(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilK(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  // 고급 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...");
    }
    makeMilK(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  // 최고급 차가운 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...");
    }
    makeMilK(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  // 우유가 없음
  class NoMilk implements MilkFrother {
    makeMilK(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSuger() {
      console.log("Getting some from candy");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  // 고급 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSuger() {
      console.log("Getting some sugar from jar!!");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  // 설탕이 없음
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 각각의 기능별로 클래스를 따로 만들어줌으로써 필요한 곳에서 가져다가 쓰는 컴포지션하는 것을 구현
  // 치명적인 단점은 기능을 추가한 클래스에서 다른 기능을 쓰기 위해서는 일일히 수정을 해줘야됨

  // 클래스와 클래스들간에 직접적으로 연결해주는 방식은 권장되지 않음 -> 확장성이 좋지 않아서

  //   class CaffeLatteMachine extends CoffeeMachine {
  //     constructor(
  //       beans: number,
  //       public readonly serialNumber: string,
  //       private milkFother: MilkFrother
  //     ) {
  //       super(beans);
  //     }
  //     makeCoffee(shots: number): CoffeeCup {
  //       const coffee = super.makeCoffee(shots);
  //       return this.milkFother.makeMilK(coffee);
  //     }
  //   }

  //   class SweetCoffeeMaker extends CoffeeMachine {
  //     constructor(private beans: number, private sugar: SugarProvider) {
  //       super(beans);
  //     }
  //     makeCoffee(shots: number): CoffeeCup {
  //       const coffee = super.makeCoffee(shots);
  //       return this.sugar.addSugar(coffee);
  //     }
  //   }

  //   class SweetCaffeLatteMachine extends CoffeeMachine {
  //     constructor(
  //       private beans: number,
  //       private milk: MilkFrother,
  //       private sugar: SugarProvider
  //     ) {
  //       super(beans);
  //     }
  //     makeCoffee(shots: number): CoffeeCup {
  //       const coffee = super.makeCoffee(shots);
  //       const sugarAdded = this.sugar.addSugar(coffee);
  //       return this.milk.makeMilK(sugarAdded);
  //     }
  //   }

  // Milk
  const CheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  //   const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
  //   const sweetMachine = new SweetCoffeeMaker(12, sugar);

  //
  const latteMachine = new CoffeeMachine(12, CheapMilkMaker, noSugar);
  //   const latteMachine = new CaffeLatteMachine(12,"SS", CheapMilkMaker);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  //   const coldLatteMachine = new CaffeLatteMachine(12, "SS", coldMilkMaker);

  //
  const sweerLatteMachine = new CoffeeMachine(12, CheapMilkMaker, candySugar);
  //   const sweerLatteMachine = new SweetCaffeLatteMachine(
  //     12,
  //     CheapMilkMaker,
  //     candySugar
  //   );

  // 컴포지션을 통해 상속을 전혀 사용하지 않고도 커피머신이라는 클래스에 우리가 필요한 다양한 형태의 우유와 설탕을 주입함으로써
  // 원하는 다양한 형태의 오브젝트를 만들 수 있다

  // 상속이 무조건 나쁜건 아니고 상속이 꼭 필요한 경우도 있다
  // -> 수직적인 관계가 많다면 상속의 관계가 너무 깊다면 컴포지션을 이용할 순 없는지 어떻게 하면 확장이 가능한지
  //    퀄리티를 어떻게 하면 높일지 고민하는 과정이 필요

  // 한 가지 유의해야될 점은 Over Engineering 하지마라 !
  // 타이트한 일정내에 어떤 기능을 구현해야되는데 기능을 구현하는데 초점을 둬야하는데 코드를 어떻게 하면 더 개선할 수 있을까
  // 여기에만 시간을 너무 투자하거나 더 확장하지 않아도 되는데 확장성만 너무 고려해서 코드를 더 복잡하게 구현할 필요는 없다 !

  // -> 어느정도 중간지점을 맞춰가며 센스있게 코드를 짜보자 !!
}
