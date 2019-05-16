function main() {
  let a: number | undefined;
  let b: number | undefined;

  process.stdin.on('data', data => {
    if (a === undefined) {
      a = Number(data.toString());
    } else if (b === undefined) {
      b = Number(data.toString());
      console.log(`${a} + ${b} = ${a + b}`);
      process.stdin.pause();
    }
  });
}

main();
