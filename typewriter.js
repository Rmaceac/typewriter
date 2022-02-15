const sentence = "top of the morning to you gentleperson!";


const timedPrint = function() {
  let duration = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, duration);
    duration += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, duration);
};

timedPrint();