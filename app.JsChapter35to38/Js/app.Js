// Assginment of chapter 35 to 38 : Functions

// ===================================Question1=================================

// function dateTime() {
//     let dateTime = new Date();
//     document.write("Date & Time: " + dateTime);
//   }
  
//   dateTime()

// =====================================End=====================================

// ===================================Question2=================================

// let firstName = prompt("Enter your first name:")
// let lastName = prompt("Enter your last name:")
// let fullName = firstName + " " + lastName;

// function greetUser(firstName, lastName) {
//     alert("Hello, " + fullName + "!");
//   }
  
//   greetUser(firstName, lastName); 

// =====================================End=====================================

// ===================================Question3=================================

// let num1 = +prompt("Enter number 1:")
// let num2 = +prompt("Enter number 2:")

// function addNum(num1, num2) {
//     return num1 + num2;
//   }
  
//  let result = addNum(num1, num2);
//   document.write("Sum:", result);

// =====================================End=====================================

// ===================================Question4=================================

//  let num1 = +prompt("Enter number 1:");
//   let num2 = +prompt("Enter number 2:");
//  let opeartor = prompt("Enter the opeartor:");

// function calculator(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         result = num1 / num2;
//         break;
//       default:
//         document.write("Invalid operator");
//         return;
//     }
  
//     document.write("Result: " + result);
//   }

//   calculator(num1, num2, opeartor);
  
// =====================================End=====================================

// ===================================Question5=================================

// let num = +prompt("Enter a number for squaring:")
// function square(num) {
//     return num * num;
//   }
//   let result = square(num);
//   document.write("Square of no " + num + ": "+ result);

// =====================================End=====================================

// ===================================Question6=================================

// let num = +prompt("Enter a num for factorial")

// function factorial(num) {
//     if (num === 0 || num === 1) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   }
  
//   let result = factorial(num);
//  document.write("Factorial of no " + num + " : " + result);
  
// =====================================End=====================================

// ===================================Question7=================================

// let start = +prompt("Enter a starting number:")
// let end = +prompt("Enter a ending number:")

// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//       document.write(i + "<br>");
//     }
//   }
  
//   counting(start, end);
  
// =====================================End=====================================

// ===================================Question7=================================


// let base = +prompt("Enter base of triangle")
// let perpendicular = +prompt("Enter perpendicular of triangle")

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num;
//     }
  
//     let baseSqur = calculateSquare(base);
//     let perpendicularSqur = calculateSquare(perpendicular);
//     let hypotenuseSqur = baseSqur + perpendicularSqur;
//     let hypotenuse = Math.sqrt(hypotenuseSqur);
  
//     document.write("Hypotenuse:", hypotenuse);
//   }
  
//   calculateHypotenuse(base, perpendicular);
  
  
// =====================================End=====================================


// ===================================Question9=================================

// //Arguments as values
// function rectangleAreaValue(width, height) {
// let area = width * height;
//     document.write("Area as values:"+ area+ "<br>");
//   }
  
//   rectangleAreaValue(5, 10);
  
//   //Arguments as variables
//   function rectangleAreaVariable(width, height) {
//     let area = width * height;
//     document.write("Area as variables:"+ area);
//   }
  
//   let rectanglewidth = 5;
//   let rectangleheight = 10;
//   rectangleAreaVariable(rectanglewidth, rectangleheight);

  // =====================================End=====================================
  
  // ===================================Question10=================================

  // let string = prompt("Enter a palindrome word")
  // function palindrome(string) {
  //   var reversed = string.split("").reverse().join("");
  //   if (string === reversed) {
  //     document.write(string + " is a palindrome.");
  //   } else {
  //     document.write(string + " is not a palindrome.");
  //   }
  // }
  // palindrome(string)

  // =====================================End=====================================

  // ===================================Question11================================

  // function titleCase(str) {
//   var words = str.split(" ");
//   var capitalizedWords = [];

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//     capitalizedWords.push(capitalizedWord);
//   }

//   var result = capitalizedWords.join(" ");
//   document.write(result);
// }

// titleCase("the quick brown fox");


 // =====================================End=====================================

  // ===================================Question12================================

  // function findLongestWord(str) {
  //   var wordSplit = str.split(" ");
  //   var longestWord = " ";
 
  //   for (var i = 0; i < wordSplit.length; i++) {
  //     if (wordSplit[i].length > longestWord.length) {
  //       longestWord = wordSplit[i];
  //     }
  //   }
  
  //  document.write("Longest word: ", longestWord);
  // }
  
  // findLongestWord("Web Development Tutorial");
  
// =====================================End=====================================

 // ===================================Question13================================

//  let str = prompt("Enter a string")
// let letter = prompt("Enter a letter to search")
// let count = 0;

//  function countOccurrences(str, letter) {
//    for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) === letter) {
//       count++;
//     }
//   }

//   document.write("Occurrences of the specified letter " + letter + " : ", count);
// }

// countOccurrences(str, letter);

// =====================================End=====================================

 // ===================================Question14================================

//  let radius = +prompt("Enter a radius");

//  function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//   document.write("The circumference is: ", circumference.toFixed(2) +"<br>");
// }

// function calcArea(radius) {
//   var area = Math.PI * Math.pow(radius, 2);
//   document.write("The area is: ", area.toFixed(2));
// }

// calcCircumference(radius);
// calcArea(radius);


// =====================================End=====================================













