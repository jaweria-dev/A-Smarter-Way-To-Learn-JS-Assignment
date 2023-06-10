// Chapter 17-20: Array And Loop Assignment...


// =====================Question#1=====================

// let multiarrays = [[], []];

// =========================End=========================


// =====================Question#2=====================

// let multiDimension = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
// document.write("<h2>Matrix:</h2>");

// for (let i = 0; i < multiDimension.length;  i++) {
//   for (let j = 0; j < multiDimension[i].length;  j++) {
//     document.write(multiDimension[i][j] + " ");
//     if (j>2) {
//        document.write("<br>")
//     }
//   }
// }


// =========================End=========================


// ======================Question#3=====================

// let num = 10;
// for(var i = 1; i<=num ;i++) {
//     document.write(i + "<br>")
// }

// =========================End==========================


// =====================Question#4=======================

  //  let table = +prompt("Enter a number which you want for multiplication");
  //  let table_length = +prompt("Enter the length of a multiplicatin number")
   
  //  document.write("<h1>" + "Table of " + table +":</h1>");
  //  document.write("Multiplication table of: "+ table +"<br>");
  //  document.write("Length of a table is: " + table_length +"<br>" +"<br>");
   
  //  for(let i = 1; i <= table_length; i++) {
  //   document.write(table + " x " + i + " = " + table*i +"<br>")
  //  }

// =========================End==========================


// =====================Question#5=======================

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// document.write("<h1>Fruits list </h1>");

// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] +"<br>");
// }
// for(let i = 0; i < fruits.length; i++) {
//   document.write("<br> Element  at index " +i + " is " +fruits[i] )
// }

// =========================End==========================

// =====================Question#6=======================
// part(a)
// let countingarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write("<h3>Counting:</h3>")
// for(let i = 1; i <= 15; i++){
//   document.write(i +",");
// }

// part(b)
// let reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// document.write("<h3>Reverse Counting:</h3>")
// for (let i = 10; i > -1; i--) {
//   document.write(i +" , ");
// }

// part(c)
// let evenNum = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// document.write("<h3>Even Number:</h3>")
// for (let i = 0; i < 20; i++) {
//   if ( i % 2 === 0) {
//   document.write(i +" , ");
//   }
// }

// part(d)
// let OddNum = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// document.write("<h3>Odd Number:</h3>")
// for (let i = 0; i < 20; i++) {
//   if ( i % 2 !== 0) {
//   document.write(i +" , ");
//   }
// }

// part(e)
// let series = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// document.write("<h3>Series Counting:</h3>")
// for (let i = 1; i < 20; i++) {
//   if ( i % 2 === 0) {
//   document.write(i + "k" +" , ");
//   }
// }

// =========================End==========================


// =====================Question#7=======================

// let items = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome here, what do you want for order?");
// let bakeryItem = userInput.toLowerCase();
// let flag = false;

// for (let i = 0; i < items.length; i++) {
//   if (bakeryItem === items[i]) {
//     flag = true;
//   }
// }
// if(flag === true) {
//   document.write("<h2>Find Item:</h2>")
//   document.write(bakeryItem + " is available at index " + items.indexOf(bakeryItem) +" in our baker");
// }
// else{  
//   document.write("<h2>Error</h2>")
// document.write("We are sorry "+ bakeryItem +  " is not available  ");
// }

// =========================End==========================

// =====================Question#8=====================

// let numbers = [24, 53, 78, 91, 12];
// let largestNum = numbers[0];

// for (let i=1; i <numbers.length; i++) {
//     if(numbers[i] > largestNum ){
//         largestNum = numbers[i];
        
//     }
// }
// document.write("<h2>Largest number:</h2>")
// document.write("Array: " + numbers + "<br>")
// document.write("The largest number is " + largestNum)

// =========================End==========================

// =====================Question#9=====================

// let numbersArray = [24, 53, 78, 91, 12];
// let SmallestNum = numbersArray[0];

// for (let i=1; i <numbersArray.length; i++) {
//     if(numbersArray[i] < SmallestNum ){
//         SmallestNum = numbersArray[i];
        
//     }
// }
// document.write("<h2>Smallest number:</h2>")
// document.write("Array: " + numbersArray + "<br>")
// document.write("The smallest number is " + SmallestNum)

// =========================End==========================

// // =====================Question#10=====================

// let integer = 100;
// console.log("Multiplication of 5:");

// for(let i = 1; i <=integer; i++) {
//     let reminder = i % 5;
//    if (reminder === 0){
//     console.log(i)
//    }
// }

// =========================End============================