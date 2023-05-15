// CHAPTER:5 ASSIGNMENT

// ---------------------------Question 1--------------------------------
// var value1= +prompt("Enter First Value");
// var value2 = +prompt("Enter Second Value");
// var add = value1 + value2 ;
// document.write("Sum of " + value1 + " & " + value2 +" is " + add);
// -------------------------End of Question 1---------------------------

// ---------------------------Question 2--------------------------------
// var value1= +prompt("Enter First Value");
// var value2 = +prompt("Enter Second Value");
// // Subtartion
// var sub = value1 + value2 ;
// document.write("Subtartion of " + value1 + " & " + value2 +" is " + sub +"<br>");

// // Multiplication
// var multiply = value1 * value2 ;
// document.write("Multiplication of " + value1 + " & " + value2 +" is " + multiply +"<br>");

// // Division
// var div = value1 / value2 ;
// document.write("Division of " + value1 + " & " + value2 +" is " + div +"<br>");

// // Mlodulus
// var module = value1 % value2 ;
// document.write("Mlodulus of " + value1 + " & " + value2 +" is " + module +"<br>");
// -------------------------End of Question 2---------------------------

// ---------------------------Question 3-------------------------------
// Part (a)
// var number;

// //Part(b)
// document.write("Value after variable declaration is " + number + "<br>");

// // Part(c)
// number = 9;

// // Part(d)
// document.write("Initial value: " + number + "<br>");

// // part(e)
// number++;

// //Part(f) 
// document.write("Value after increment is: " + number + "<br>");

// // Part(g)
// number += 7;

// // Part(h)
// document.write("Value after addition is: " + number + "<br>");

// // Part(i)
// number--;

// // Part(J)
// document.write("Value after decrement is: " + number + "<br>");

// // Part(k)
// var remainder = number % 3;

// // Part(l)
// document.write("The remainder is: " + remainder);

// -------------------------End of Question 3---------------------------

// ---------------------------Question 4--------------------------------
// var ticketCost = +600;
// var totalPrice = ticketCost * 5 ;
// document.write("Total cost to buy 5 ticket to a movie is " + totalPrice +"PKR " );

// -------------------------End of Question 4---------------------------


// ---------------------------Question 5--------------------------------
// var h1 =("Table of 4");
// console.log(h1);
// var table = +4 ;
// for(var i=1 ; i<=10; i++){
//     console.log(table +" X"+ " " +i + " = " + table*i);
// }


// -------------------------End of Question 5---------------------------


// ---------------------------Question 6--------------------------------
//Celsius to Farenheit
// var celsius = +prompt("Enter temperature in °C");
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F <br>");

// // Fahrenheit to Celsius
// var fahrenheit = +prompt("Enter temperature in °F")
// var celsius = (fahrenheit - 32) * 5/9;
// document.write(fahrenheit + "°F is " + celsius + "°C");


// -------------------------End of Question 6---------------------------


// ---------------------------Question 7--------------------------------
// document.write("<h1>Shopping Cart</h1>"+"<br>");

// //Item 1
// var item1 = +prompt("Enter item1 Price");
// var quantity1 =+prompt("How much quantity of item1")
// document.write("Price of item 1 is "+ item1 +"<br>");
// document.write("Quantity of item 1 is "+ quantity1+ "<br>" )

// //Item2
// var item2 =+prompt("Enter item2 Price");
// var quantity2 = +prompt("How much quantity of item2")
// document.write("Price of item 2 is "+ item2 +"<br>");
// document.write("Quantity of item 2 is "+ quantity2 +"<br>")

// //ShipCharges
// var shipCharge = +200;
// alert("Shipping Charges is " + shipCharge)
// document.write("Shipping Charges is " + shipCharge+"<br>" +"<br>")

// //Total Cost
// var total = ((item1 * quantity1) + (item2 * quantity2)  + shipCharge );
// document.write("Total cost of your order is "+ total);

// -------------------------End of Question 7---------------------------


// ---------------------------Question 8--------------------------------

// var marksObtained= +prompt(" Enter Your Total Obtained Marks");
// var totalMarks = 980;
// var percentage = (marksObtained / totalMarks )*100 ;

// document.write("<h1>Mark Sheet</h1>");
// document.write("Total marks :"  + totalMarks +"<br>") ;
// document.write("Marks Obtained :" + marksObtained +"<br>");
// document.write("Percentage :" + percentage + "%");

// -------------------------End of Question 8---------------------------

// ---------------------------Question 9--------------------------------
// document.write("<h1>Currency in PKR</h1>" +"<br>" +"<br>")

// var usDollars = +10;
// var saudiRiyals = +25;
// var pakistaniCurrency = (usDollars * 104.80) +(saudiRiyals * 28);
// document.write("Total Currency in PKR: " + pakistaniCurrency);

// -------------------------End of Question 9-------------------------

// ---------------------------Question 10--------------------------------

// var num = +prompt("Enter a number") ;
// var solve = ((num +5)*10) /2;
// document.write("Result:" + solve);

// -------------------------End of Question 10 -------------------------


// ---------------------------Question 11--------------------------------

// document.write("<h1>Age Calculator</h1>" +"<br" +"<br>");

// var currentYear = 2023;
// var birthYear = +prompt("Enter Your Year of Birth:");
// var age1 = currentYear - birthYear ;
// var age2= age1 -1
// document.write("Current Year :" + currentYear +"<br>" +" Birth Year :" + birthYear +"<br>")
// document.write("They are either " + age2 + " or " + age1 + " years old.")

// -------------------------End of Question 11 -------------------------

// ---------------------------Question 12--------------------------------
// document.write("<h1>THE GEOMETRIZER</h1>" +"<br>" + "<br>")
// var radius = +prompt("Enter a value")

// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius**2;

// document.write("Radius of a circle:" + radius +"<br>" )
// document.write("The circumference is: " + circumference +"<br>" );
// document.write("The area is: " + area +"<br>" );


// -------------------------End of Question 12 ---------------------


// ---------------------------Question 13--------------------------------
// var favSnack = prompt("Enter your Favourite Snack");
// var age =+prompt("Enter your Current age");
// var maximumAge =+prompt("Enter your Maximun age");
// var amount =+prompt("How much would you consume per day")
// var total = (maximumAge - age)*amount


// document.write("<h1> The LifeTime Supply Calculator </h1>" +"<br>" +"<br>");
// document.write("Favourite Snack:" + favSnack +"<br>")
// document.write("Current Age:" + age +"<br>")
// document.write("Estimated Maximun Age:" + maximumAge +"<br>")
// document.write("Amount of snacks per day :" + amount +"<br>")

// document.write("You will need "+total +" " +favSnack +" to last you until the ripe old age of " +maximumAge )


// -------------------------End of Question 13 ----------------------------------


// --------------------------------THE END---------------------------------------------
