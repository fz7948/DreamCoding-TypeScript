{
  type Video = {
    title: string;
    author: string;
  };
  [1, 2].map((item) => item * item); // [1, 4]
  type Optional<T> = {
    //type 오브젝트 정의 안에서 []를 쓰면 for .. in 처럼 key를 돌 수 있다
    [P in keyof T]?: T[P]; // for .. in
  };
  type Readonly<T> = {
    readonly [P in keyof T]: T[P]; // 'title' | 'author'
  };
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "asd",
  };
  type Animal = {
    name: string;
    age: string;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "ellie";

  const video: Readonly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
