{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // 관련된 요일의 상수를 정의하는 경우에 서로 연관되어 있지만
  // 묶을 수 있는 타입이 따로 존재 하지 않는다
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  // 위와 같이 정의가 가능
  const dayofToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  // 위와 같이 union을 활용해서 상수를 지정할 수 있다 (권장 코드)
  enum Days {
    // 관련된 상수값을 묶어줄 수 있다
    // 타입스크립트에서 enum은 가능하면 쓰지 말자
    // enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당이 가능
    Monday, // 0
    // Monday = 1 -> 다음 값이 2부터 시작
    // Monday = 'monday' -> 문자열도 가능 (다음값이 자동으로 입력되진 않음)
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  const day: Days = Days.Saturday;
  // day = 10 -> 할당이 됨
  // 콘솔에는 별다른 이슈없이 제대로 작동 -> Days.Saturday값이 출력
  console.log(day);

  let dayOfWeek: DaysOfWeek = "Monday";
  //   dayOfWeek = 'ellie' -> 불가능
  // enum은 union으로 충분히 대체가능
  // react.native와 호환할때는 union식 표현이 없어서 enum을 사용해야됨
  // -> 다른 모바일 클라이언트와 호환할때 (flatter, native)
}
