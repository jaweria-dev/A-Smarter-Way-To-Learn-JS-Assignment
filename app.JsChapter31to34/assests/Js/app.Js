// Assignment of Chapter 31 to 34

// ======================Question 1=====================

// let date = new Date();
// document.write("<h1>Current Date & Time:</h1>")
// document.write(date);

// =========================End=========================

// ======================Question 2=====================

// var month_names = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// document.write("<h1>Current Month:</h1>")

// let date = new Date();
// let months = date.getMonth();
// let CurrentMonth = month_names[months];
// document.write("Current month: " + CurrentMonth);

// =========================End=========================

// ======================Question 3=====================

// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let date = new Date();
// let theDay = date.getDay();
// let dayName = days[theDay]; 

// document.write("<h1>Current Day:</h1>")
// document.write("Today is " + dayName);

// =========================End=========================

// ======================Question 4=====================

// let date = new Date();
// let days = date.getDay();
// if (days === 0 || days === 6) {
//     alert("let's Enjoy, It’s Fun day")
// }
// else{
//     alert("It's a working day not funday")
// }

// =========================End=========================

// ======================Question 5=====================

// let date = new Date();
// let theDay = date.getDate();

// if (theDay < 16) {
//     alert("It's first fifteen days of month")
// }
// else {
//     alert("It's last days of month")
// }

// =========================End=========================

// ======================Question 6=====================

// let date = new Date();
// let millisec = date.getTime();
// let minutes = Math.floor(millisec / (1000 * 60));

// document.write("<h1>Get milliseconds & minutes:</h1>")
// document.write("Current date: " + date + "<br>")
// document.write("Elapsed milli seconds since January 1, 1970: " +millisec + "<br>")
// document.write("Elapsed milli seconds since January 1, 1970: " + minutes + "<br>")

// =========================End=========================

// ======================Question 7=====================

// let time = new Date();
// let hours = time.getHours();
// document.write("<h1> Check it's AM & PM</h1>")

// if (hours <= 12) {
//     document.write("Its AM")
// }

// else {
//     document.write("It's PM ")
// }

// =========================End=========================

// ======================Question 8=====================

// let date = new Date("December 31, 2020");
// document.write("<h1>Later Date of December:</h1>")
// document.write("Later date: " + date)

// =========================End=========================

// ======================Question 9=====================

// let ramadanStartDate = new Date("March 23, 2023");
// let date = new Date();

// let dateDifference = date - ramadanStartDate;
// let passingDays = Math.floor( dateDifference / (1000 * 60 * 60 * 24));

// document.write("<h1>Passing days of ramadan:</h1>")
// document.write( passingDays + " Days have passed since 1st Ramadan")

// =========================End=========================

// ======================Question 10=====================

// let date = new Date("december 5 2015");
// let new_Date = new Date();

// let dateDifference = new_Date - date;
// let referenceMillisec  = Math.floor(dateDifference / 1000);

// document.write("<h1>Reference Date:</h1>")
// document.write("On reference date " + date +",<br>" + referenceMillisec + " seconds had passed since beginning of 2015" +"<br>");

// =========================End=========================

// ======================Question 11=====================

// let currentDate = new Date();
// document.write("<h1>Reset the time:</h1>")
// document.write("Current date: " + currentDate +"<br>")

// let currentHrs = currentDate.getHours();
// currentDate.setHours(currentHrs -1);
// let hourAgo = new Date(currentDate)

// //Result
// document.write( "1 hour ago: " + hourAgo);

// =========================End=========================

// ======================Question 12=====================

// let currentDate = new Date();

// let currentMon = currentDate.getFullYear();
// currentDate.setHours(currentMon -100);
// let passingYears = new Date(currentDate)

// //Result
// alert("CurrentDate: " + new Date() + " \n 100 years back, it was " +passingYears);

// =========================End=========================

// ======================Question 13=====================

// let userAge = +prompt("Enter your age")

// let year = new Date().getFullYear()

// let birthYear = year - userAge;

// document.write("Your age is : " +userAge + "<br>" + "Your birth year is: " + birthYear)

// =========================End=========================

// ======================Question 14=====================

// var customerName =prompt("Enter customer name:"); 
// var currentMonth =prompt("Enter current month:");
// var numberOfUnits = parseFloat(prompt("Enter number of units:"));
// var chargesPerUnit = 16;
// var latePaymentSurchargeRate = 0.1;


// var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// var latePaymentSurcharge = (netAmountPayable * latePaymentSurchargeRate).toFixed(2);
// var grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);


// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Current Month: " + currentMonth + "<br>");
// document.write("Number of Units: " + numberOfUnits+ "<br>");
// document.write("Charges per Unit: " + chargesPerUnit.toFixed(2)+ "<br><br>");
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable+ "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable);

// =========================End=========================






