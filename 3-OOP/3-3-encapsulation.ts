{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 정보 은닉 방법
  // public
  // private -> 어떤 누구라도 클래스 외부에선 접근 불가능
  // protected -> 나중에 상속을 할 때 외부에서 접근할 수 없지만 상속된 자식 클래스에서만 접근 가능
  class CoffeeMaker {
    private static BEANS_CRAMM_PER_SHOT: number = 7; // class level
    // private로 보호해주면 외부에서 접근 불가능 -> 콘솔에도 안 찍힘
    private coffeeBeans: number = 0; // instance (object) level
    // 따로 지정하지 않으면 기본값은 public -> 외부에서 접근 가능

    private constructor(coffeeBeans: number) {
      // static 메소드를 이용하도록 권장하기 위해 생성자에 private -> new 키워드로 새로운 인스턴스가 만들어지지 않음
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      //class 내부에 있는 어떠한 속성값도 필요하지 않기때문에 static을 붙여줄 수 있다
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_CRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_CRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }
  //   const maker = new CoffeMaker(32) -> 생성자에 private 해줘서 만들어지지 않음
  const maker = CoffeeMaker.makeMachine(32);
  // private하면 외부에서 접근 x
  //   maker.coffeeBeans = 3;
  //   maker.coffeeBeans = -34; invalid
  maker.fillCoffeeBeans(32);

  class User {
    // private firstName: string;
    // private lastName: string;
    // fullName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        // 유효성 검사
      }
      this.internalAge = num;
    }
    constructor(public firstName: string, private lastName: string) {
      // 생성자에 접근 제어자를 설정해두면 맴버 변수로 사용가능 -> ex) firstName이 this.firstName으로 설정
      //   this.firstName = firstName;
      //   this.lastName = lastName;
      //   this.fullName = `${firstName} ${lastName}`;
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  user.firstName = "Ellie";
  console.log(user.fullName); // Steve Jobs -> 한번 생성자에서 입력되면 그 뒤로 값이 바뀌어도 바뀌지않음
  // get을 사용해주면 값이 바뀜
  user.age = 6;
  // set으로 값을 바꿔줌 -> set 사용법이 좀 특이하다?
  console.log("?", user.age); // 6
}
