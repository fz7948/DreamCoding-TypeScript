// Java: Exception
// JavaScript: Error
// const array = new Array(1000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist") {
    throw new Error(`file not exist ${fileName}`);
  }
  return "file contents";
}

function closeFile(file: string) {
  console.log("close inner function");
}

function run() {
  const fileName = "file";
  // const fileName = "not exist";

  try {
    //에러가 발생할 수 있는 부분만 try안에 넣는것이 좋다
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!`);
    return; // -> 없으면 run 함수 밑에 호출까지 실행되지만 있으면 여기서 끝남
  } finally {
    // catch에서 return을 해도 호출됨
    closeFile(fileName);
    console.log("close!");
  }
  //   closeFile(fileName);
  //   console.log('close!')
}
run();
