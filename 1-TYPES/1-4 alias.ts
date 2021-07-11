{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: Number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let ellieName: Name;
  // ellieName= 'wooyoung' -> error
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  //   const isCat: Boal = false -> error
  const isCat: Boal = true;
}
