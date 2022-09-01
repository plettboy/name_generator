const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question("What do you think of basketball? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question("What do you think of baseball? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question("What do you think of soccer? ", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question("What do you think of Node.js? ", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.close();
        });

        // rl.close();
      });

      // rl.close();
    });

    // rl.close();
  });

  // rl.close();
});
