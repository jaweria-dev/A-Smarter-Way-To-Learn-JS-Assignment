// Assignment #6 MATH EXPRESSIONS

// -------------------------------Question 1-------------------------------

//  var a = +10;

// document.write("Result:" +"<br>" +"The value of a is " + a + "<br>" +"----------------------"+ "<br>" +"<br>" )

// document.write("The value of ++a is:" + ++a +"<br>" + "Now the value of a is:" +a  +"<br>" +"<br>")
// document.write("The value of a++ is:" + a++ +"<br>" + "Now the value of a is:" +a  +"<br>" +"<br>")
// document.write("The value of --a is:" + --a +"<br>" + "Now the value of a is:" +a  +"<br>" +"<br>")
// document.write("The value of a-- is:" + a-- +"<br>" + "Now the value of a is:" +a  +"<br>" +"<br>")

// -----------------------------End of Question 1----------------------------

// -------------------------------Question 2-------------------------------

// var a = 2
// var b = 1;
// document.write ("a is " + a +"<br>"); 
// document.write ("b is " +b +"<br>");

// //solution of expression
// var output1=--a;//--a= 1
// document.write("--a; " + output1 + "<br>")

// var output2 = output1- --b;// 1- 0 = 1
// document.write("--a - --b; " +  output2+ "<br>")

// var output3 =output2 + ++b;// 1- 0 + 1 =2
// document.write("--a - --b + ++b; "+output3  + "<br>")

// var output4 =output3 +b--;// 1 - 0 + 1 + 1 =3
// document.write("--a - --b + ++b + b--; " +output4+ "<br>")

// //Result
// var result = output4;
// document.write( "The result is " + result)

// -----------------------------End of Question 2----------------------------

// -------------------------------Question 3-------------------------------
// var user_name =prompt("Enter your name");
// alert("Welcome "+ user_name);
// -----------------------------End of Question 3----------------------------

// -------------------------------Question 4-------------------------------
// var table=prompt("Enter any number which you want for multiplication") ||5
// document.write("Table of " +table +"<br>")
// for (let i=0 ; i<=10; i++){
//  document.write(table +" X " + i+" = " + table*i +"<br>")
// }

// -----------------------------End of Question 4----------------------------

// -------------------------------Question 5-------------------------------
// var subject1= prompt("Enter your First subject name :");
// var subject2= prompt("Enter your Second subject name :");
// var subject3= prompt("Enter your Third subject name :");

// var totalMarks= +100;

// var marks_subject1 = +prompt("Enter your Obtained Marks of: " + subject1);
// var marks_subject2 = +prompt("Enter your Obtained Marks of: " + subject2);
// var marks_subject3 = +prompt("Enter your Obtained Marks of: " + subject3);

// var percentage_subject1 = (marks_subject1 / totalMarks) *100;
// var percentage_subject2 = (marks_subject2 / totalMarks) *100;
// var percentage_subject3 = (marks_subject3 / totalMarks) *100;

// var grandTotal_Marks = totalMarks + totalMarks + totalMarks;
// var grandObtained_Marks = marks_subject1 + marks_subject2 + marks_subject3;
// var grandTotal_percentage = (grandObtained_Marks/grandTotal_Marks) *100

// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks_subject1 +"</td><td>" +percentage_subject1+ "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks_subject2+"</td><td>" +percentage_subject2  + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks_subject3 +"</td><td>" +percentage_subject3 + "%</td></tr>");

// //GrandTOTAL
// document.write("<tr><th colspan='1'>Total:</th><th>" + grandTotal_Marks + "</th><th>" +grandObtained_Marks + "</th><th>"+ grandTotal_percentage + "%</th></tr>")
// document.write("</table>");


// -----------------------------End of Question 5----------------------------

// ------------------------------------THE END----------------------------