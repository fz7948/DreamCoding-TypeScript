{
  // alias
  // 어떠한 데이터를 담을 때, 데이터의 모습, 데이터의 타입을 결정하는 것
  // 어떠한 것을 구현할 목적으로 만드는 것이 아니라, 데이터를 담을 목적으로 만든 다면 인터페이스보단 타입을 쓰는 것이 조금 더 좋다

  type PositionType = {
    x: number;
    y: number;
  };
  // interface
  // 어떤 것의 구격 사항, 다른 사람들과 의사소통할때 오브젝트와 오브젝트간에 의사소통할때 정해진 인터페이스를 통해 상호작용 하도록 해준다
  // API는 서로간의 약속을 할 수 있는 계약서와 동일
  // 어떤 특정한 규격을 정하는 것이라면 그리고 이 규격을 통해서 어떤 것이 구현된다면 타입(alias)보단 인터페이스를 쓰는 것이 더 정확하다
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends
  interface ZpositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // only interfaces can be merged
  interface PositionInterface {
    z: number;
  }

  // Type aliases can compiuted properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}
