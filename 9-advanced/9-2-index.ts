{
  const obj = {
    name: "ellie",
  };
  obj.name; // ellie
  obj["name"]; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  //  keyof는 Object의 key들의 lieteral 값들을 가져온다
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
