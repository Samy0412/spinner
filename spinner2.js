const spinner = "|/-\\|/-\\";
let time = 100;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write("\r" + char + "   "); // print the char here
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
  time += 200;
}
