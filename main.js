// 1. Name
let name = prompt("What is your name?");
prompt("Hello," + " " + name + "! " + "How are you?");

// 2. Math
let choice = prompt(
  "Great, what action do you want to take: 1 - Addition, 2 - Subtraction, 3 - Multiplication, 4 - Division?"
);

let firstNum = prompt("Okey, now enter the first number, please:", "");
firstNum = parseInt(firstNum);
let secondNum = prompt("And the second one:", "");
secondNum = parseInt(secondNum);

if (choice == 1) {
  let resNum = firstNum + secondNum;
  alert("It's" + " " + resNum);
}
if (choice == 2) {
  let resNum = firstNum - secondNum;
  alert("It's" + " " + resNum);
}
if (choice == 3) {
  let resNum = firstNum * secondNum;
  alert("It's" + " " + resNum);
}
if (choice == 4) {
  let resNum = firstNum / secondNum;
  alert("It's" + " " + resNum);
} if (choice < 1) {
    alert(
      "Dude, I told you to choose one number from four... Okey, it you are cheater we are moving to the next task..."
    );
} if (choice > 4) {
    alert(
      "Dude, I told you to choose one number from four... Okey, it you are cheater we are moving to the next task..."
    );
}

// 3. True or false
let firstTofNum = prompt("No time to explain, type new number:");
firstTofNum = parseInt(firstTofNum);
let secondTofNum = prompt("And the second one, do it faster, please. I need to check if they are the same:");
secondTofNum = parseInt(secondTofNum);
// alert(firstTofNum == secondTofNum) (но это скучно)
if (firstTofNum == secondTofNum) {
    alert("True. Yes, it worked!");
} else {
    alert("False. Noooo, something went wrong!");
}

// 4. Arithmetic mean
let firstArithNum = prompt("Okey, it was easy, now let's find arithmetic mean of three numbers. Type your first number:");
firstArithNum = parseInt(firstArithNum);
let secondArithNum = prompt("Second one:");
secondArithNum = parseInt(secondArithNum);
let thirdArithNum = prompt("Print the last number and we'll find arithmetic mean:");
thirdArithNum = parseInt(thirdArithNum);
let arithMeanNum = (firstArithNum + secondArithNum + thirdArithNum) / 3;
alert("It's" + " " + arithMeanNum);

// 5. Я ВСЁ ПОНЯЛ! ахахах
let fiveNumDigital = prompt("Type the 5-digital number:");

let toString = fiveNumDigital.toString();

let numArray = toString.split('');

let result = numArray.join(' ');

alert(result);