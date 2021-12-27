function calculator() {
  let value = "this is not proper value";
  let element = document.getElementById("submitText");
  let returnElement = document.getElementById("textDisplay");
  value = element.value;
  returnElement.innerHTML = value;
}
// created user input from console
// Problem 4 with out using functions  created calculator add subtract multiply and divide
/* solution for number 4 Make a calculator using switch/case and take a user input to perform any calculation. If user enters any value other than 1-5, 
display a message 'Invalid Option' and end the program.
                                                                                        MENU

                                                                                  1. Add

                                                                                  2. Subtract

                                                                                  3. Multiply

                                                                                  4. Divide

                                                                                  5. Exit
*/                                                                                  
function addition(){// addition block open 
      document.getElementById("prompt").innerHTML="you chose an addition";
      let userInput = "";//user input number
      let isNum = /^\d+$/.test(userInput);// test if an
      let numbersUsed = [];
      let sum = 0;
      let holdingValue=0;
      
      do {
        userInput = prompt("Enter your number to add: ");
        isNum = /^\d+$/.test(userInput);
        if (!isNum) {
          break;
        }
        numbersUsed.push(userInput);
        sum += Number(userInput);
        holdingValue=`The sum of numbers ${numbersUsed.join(" + ")} is ${sum}`
        document.getElementById("displays").innerHTML=holdingValue;
      } while (userInput != "" || isNum);
      ///holdingValue
      console.log(`Thank you`)
      
    }//addition block close
//     case 2: {
    function subtract(){
      document.getElementById("prompt").innerHTML="you chose an subtraction";
      let userInput = "";
      let isNum = /^\d+$/.test(userInput);
      let numbersUsed = [];
      let difference = 0;
      userInput = prompt("Enter your number to subtract: ");
      isNum = /^\d+$/.test(userInput);
      if (!isNum) {
          return
      }
      difference= Number(userInput);
      numbersUsed.push(userInput);
      while (userInput != "" || isNum) {
        userInput = prompt("Enter your number to subtract: ");
        isNum = /^\d+$/.test(userInput);
        if (!isNum) {
          break;
        }
        numbersUsed.push(userInput);
        difference -= Number(userInput);
        document.getElementById("displays").innerHTML=
          `The Difference of numbers ${numbersUsed.join(" - ")} is ${difference}`
        ;
      } 
      console.log(`Thank you`)
      
    }
    function add() {
        let sum = Number(document.getElementById("textDisplay").innerHTML)
        let valueToAdd=Number(document.getElementById("submitText").value)
        if(document.getElementById("submitText"))
        sum+=valueToAdd;
        document.getElementById("textDisplay").innerHTML=sum;
    }
//     case 3: {
   function multiply(){
      document.getElementById("prompt").innerHTML="you chose a multiplication"
      let userInput = "";
      let isNum = /^\d+$/.test(userInput);
      let numbersUsed = [];
      let product = 1;
      do {
        userInput = prompt("Enter your number to multiply: ");
        isNum = /^\d+$/.test(userInput);
        if (!isNum) {
          return;
        }
        numbersUsed.push(userInput);
        product *= Number(userInput);
        document.getElementById("displays").innerHTML=
          `The product of numbers ${numbersUsed.join(" * ")} is ${product}`
        ;
      } while (userInput != "" || isNum);
      console.log(`Thank you`)
      
    }
//     case 4: {
    function divide(){
      document.getElementById("prompt").innerHTML="you chose an Division";
      let userInput = "";
      let isNum = /^\d+$/.test(userInput);
      let numbersUsed = [];
      let quotient = 0;
      userInput = prompt("Enter your number to divide: ");
      isNum = /^\d+$/.test(userInput);
      if (!isNum) {
          return;
      }
      quotient= Number(userInput);
      numbersUsed.push(userInput);
      while (userInput != "" || isNum) {
        userInput = prompt("Enter your number to divide: ");
        isNum = /^\d+$/.test(userInput);
        if (!isNum) {
          break;
        }
        numbersUsed.push(userInput);
        quotient /= Number(userInput);
        document.getElementById("displays").innerHTML=
          `The quotient of numbers ${numbersUsed.join(" / ")} is ${quotient}`
        
      }
      console.log('Thanks for using')
      return
    }
//     case 5: {
//       console.log("You chose exit GoOd bye sad to see you go");
//       break;
//     }
//     default: {
//       console.log("You chose  Invalid Input, GoOd bye Please try again");
//     }
//   }`