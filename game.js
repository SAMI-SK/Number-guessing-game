import inquirer from "inquirer";
// Math.floor = point 0.5 jese numbers ko 0 zero show krta hai.
let guess = Math.floor(Math.random() * 10 + 1);
// Math.random number 0 < 1 
let guessNumber = await inquirer.prompt({
    message: "Enter ypur number between 1-10",
    type: "number",
    name: "yourGuess",
});
if (guessNumber.yourGuess === guess) {
    console.log("Congratulation!! your guess is right");
}
else {
    console.log("Opp's your guess is wrong");
}
