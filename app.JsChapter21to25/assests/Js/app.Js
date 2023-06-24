// Assignment#21-25: STRING METHODS

// =====================Question#1==========================

// let first_Name = prompt("Enter your First Name");
// let last_Name = prompt("Enter your Last Name");
// let fullName = first_Name +" "+ last_Name;
// fullName = fullName.toUpperCase();
// alert("Hello " + fullName +" Welcome here!");

// ========================End==============================

// =====================Question#2==========================

// let userInput = prompt("What is your favourite mobile phone model?")
// let favMobile = userInput.length
// document.write("<h1>Favourite mobile</h1>")
// document.write("My favourite mobile phone model is :" 
// + userInput + "<br> length of string is:" + favMobile)

// ========================End==============================

// =====================Question#3==========================

// let country = "Pakistan";
// let index = country.indexOf("n");
// document.write("<h1>Find the index of letter “n”:</h1>")
// document.write("Country: " + country +"<br>" + "Index of 'n': "+ index)

// ========================End==============================

// =====================Question#4==========================

// let word = "Hello World";
// let indexOfWord = word.lastIndexOf("l");
// document.write("<h1>Find the index of last letter “l”:</h1>");
// document.write("String: " + word +"<br>" + "Last index of 'l': "+ indexOfWord)

// ========================End==============================

// =====================Question#5==========================

// let countryName = "Pakistani";
// let character = countryName.charAt(3);
// document.write("<h1>Find the Character at 3rd index:</h1>");
// document.write("String: "  + countryName +"<br>" + "Character at 3rd index: "+ character);

// ========================End==============================

// =====================Question#6==========================

// let first_name = prompt("Enter your First Name");
// let last_name = prompt("Enter your Last Name");
// let fullname = first_name.concat(" "+ last_name);
// fullname = fullname.toUpperCase();
// alert("Hello " + fullname +" Welcome here!");

// ========================End==============================

// =====================Question#7==========================

//    let city = "Hyderabad";
//    let replacement = city.replace("Hyder", "Islam");
//    document.write("<h1>Replacment of word:</h1>");
//    document.write("City: "  + city +"<br>" + "After replacement: "+ replacement);

// ========================End==============================

// =====================Question#8==========================

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let modified = message.replace(/and/g, "&");
// document.write("<h1>Replacment of word and into &:</h1>");
// document.write("message: "  + message +"<br>" + "After replacement: "+ modified);

// ========================End==============================

// =====================Question#9==========================

// let string = "472";
// let number = +string;
// document.write("<h1>Find Types of values:</h1>");
// document.write("Value: "+ string +"<br> Type: " + typeof string+ "<br>");
// document.write("Value: "+ number +"<br> Type: " + typeof number);

// ========================End==============================

// =====================Question#10==========================

// let input= prompt("What is your favourite dry fruit?")
// let upperCase = input.toUpperCase();
// document.write("<h1>Change user input to upper Case:</h1>");
// document.write("User input: "  + input +"<br>" + "Upper Case: "+ upperCase);

// ========================End==============================

// =====================Question#11==========================

// let user_input = prompt("Enter a string");
// let firstChar = user_input.slice(0, 1);
//  let otherChars = user_input.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  let titleCase = firstChar + otherChars;
// // Result
//  document.write("<h1>Title Case:</h1>")
//  document.write("User input: " + user_input + "<br>" + "Title Case: " + titleCase);

// ========================End==============================

// =====================Question#12==========================

// let value = +35.36;
// let string = value.toString();
// let replacePoint = string.replace(".", "");
//  document.write("<h1>Change number to string:</h1>");
//  document.write("Number: "  + value +"<br>" + "Result: "+ replacePoint );

// ========================End==============================

// =====================Question#13==========================

// let user_Name = prompt("Enter your name");

// let exclamatoryMarkCode = 33;
// let commaCode = 44;
// let dotCode = 46;
// let atSignCode = 64;
//  let flag = true;
//  for (let i = 0; i < user_Name.length; i++) {
//       let convertUserInp = user_Name.charCodeAt(i);

//       if(convertUserInp === exclamatoryMarkCode || convertUserInp === commaCode || 
//         convertUserInp === dotCode || convertUserInp === atSignCode) {
//         flag = false;
//       }
//  }

//  if (flag === false) {
//  alert("Please enter a valid username.")
// }

// else{
//   alert("Welcome here " + user_Name)
// }
// ========================End==============================

// =====================Question#14==========================

// let bakeryItems =  ["cake", "apple pie", "cookie", "chips", "patties"];
// let user_Input = prompt("Welcome to Jiya's Bakery. What do you want to order sir/ma'am?");
// let inputLowerCase = user_Input.toLowerCase();
// let user_index = bakeryItems.indexOf(inputLowerCase);

//     let found = false;
//     for (let i = 0; i < bakeryItems.length; i++) {
//       if (bakeryItems[i].toLowerCase()=== inputLowerCase.toLowerCase()) {  
//          found = true;
//         break;
//       }
//     }

//     if (found) {
//       alert("Yes, " + user_Input + " is avaialable at " +user_index  +  " in our bakery.");
//     } 
//     else {
//       alert("We are sorry. "+  user_Input + " is not avaialable in our bakery .");
//     }

// ========================End==============================

// =====================Question#15==========================
          
// let userPassword = prompt("Enter your password");

// let zeroCode = 48;
// let smallACode = 97;
// let capsACode = 65;

// //Password should contain alphabets and numbers
// let first = false;
// for(let i = 0; i <userPassword.length; i++) {
//     let convert = userPassword.charCodeAt(i);

//     for (let j = zeroCode; j <= 57; j++) {
//         if (convert === j) {
//             first = true;
//           }
//     }
// }

// let second = false;
// for(let i = 0; i <userPassword.length; i++) {
//     let convert = userPassword.charCodeAt(i);

//     for (let j = capsACode; j <= 90; j++) {
//         if (convert === j) {
//             second = true;
//           }
//     }
// }

// let third = false;
// for(let i = 0; i <userPassword.length; i++) {
//     let convert = userPassword.charCodeAt(i);

//     for (let j = smallACode; j <= 90; j++) {
//         if (convert === j) {
//             third = true;
//           }
//     }
// }

// //Password should not start with a numbers
// let password = true;
// let passwordInString = userPassword.charCodeAt(0);
// for (let i = zeroCode; i <= 57; i++) {
//     if(passwordInString === i){
//         password = false;
//     }
// }

// //Password must at least 6 character long
// let flag = false;
// if (userPassword.length >= 6) {
//     flag = true
// }

// if (password === false) {
//     prompt ("Password cannot begin with a number\n Enter a new password")
// }
// else if (flag = true && (first === false && (second === true || third === true))) {
//     prompt ("Password should contain digit alse \n Enter new password")
// }
// else if (flag = true && (first === true && (second === true || third === true))) {
//     alert("Valid Password")
// }
// else if (flag === false) {
//     prompt("Password must at least 6 character long\n Enter new password")
// }
// ========================End==============================

// =====================Question#16==========================

// let university = "University of Karachi";
// let splitArray = university.split("");

// for (let i = 0; i < splitArray.length; i++) {
//   document.write(splitArray[i] + "<br>");
// }
// ========================End==============================

// =====================Question#17==========================

// let user = prompt("Enter a string:")
// let character = user.charAt(user.length - 1)
// document.write("<h1>Last Character:</h1>")
// document.write("User input: " + user + "<br>" + "Last character of input: " + character )

// ========================End==============================

// =====================Question#18==========================

// let text = "The quick brown fox jumps over the lazy dog";
// let lowerText = text.toLowerCase();
// let splitText = lowerText.split(" ");
// let count = 0;

// for (var i = 0; i < splitText.length; i++) {
//  if (splitText[i] === "the") {
//     count++
//  }
 
//  }
//  document.write("<h1>Count Occurances</h1>")
//    document.write("Text: " + text +"<br>")
//    document.write("There are " + count + " occurence(s) of 'the'");


// ========================End==============================