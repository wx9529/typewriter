const sentence = "hello there from lighthouse labs";
let timeInterval = 0;
for (const char of sentence) {
  (function (interval) {
    setTimeout(() => {
      process.stdout.write(`'${char}' => ${interval}ms\n`);
    }, interval);
  })(timeInterval);
  timeInterval += 50;
}
