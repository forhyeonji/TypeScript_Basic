// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents🧾';
}

function closeFile(fileName: string) {
  //
}

// readFile('not exist');
// 에러만 빰 발생하고 밑에 로직은 작동되지 않는다.
// 하지만 try-catch문을 쓰면 에러가 발생해도 아래의 로직까지 다 작동된다!

function run() {
  const fileName = 'not exist';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log('close!!!');
  }
  console.log(`Are you done?`);
}

run();
