// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents๐งพ';
}

function closeFile(fileName: string) {
  //
}

// readFile('not exist');
// ์๋ฌ๋ง ๋นฐ ๋ฐ์ํ๊ณ  ๋ฐ์ ๋ก์ง์ ์๋๋์ง ์๋๋ค.
// ํ์ง๋ง try-catch๋ฌธ์ ์ฐ๋ฉด ์๋ฌ๊ฐ ๋ฐ์ํด๋ ์๋์ ๋ก์ง๊น์ง ๋ค ์๋๋๋ค!

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
