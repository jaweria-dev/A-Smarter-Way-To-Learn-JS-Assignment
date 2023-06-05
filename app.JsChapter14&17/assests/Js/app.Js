//=========================Question 1==================================
// var students_names = [];
//========================End of Question 1============================

//=========================Question 2==================================
// var studentsObjnames= new Array();
//========================End of Question 2============================

//=========================Question 3==================================
// var string_Array = ["hello","everyone" ,"myNAME","is","Jaweria"];
// console.log(string_Array)
//========================End of Question 3============================

//=========================Question 4==================================
// var numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers)
//========================End of Question 4============================

//=========================Question 5==================================
// var booleans =[true, false, true, false];
// console.log(booleans)
//========================End of Question 5============================

//=========================Question 6==================================
// var mixed_Array =["jiya", 5 , false , 100 , "coding" , null]
// console.log(mixed_Array)
//========================End of Question 6============================

//=========================Question 7==================================

// var qualifications = ["SC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil" , "PhD"]

// document.write("<h2>Qualifications:</h2>")
// document.write("<ol>")
// for (let i=0; i< qualifications.length; i++){
//     document.write("<li>" +qualifications[i] +"</li>");
// }
// document.write("</ol>")

//========================End of Question 7============================

//=========================Question 8==================================

// var studentsNames= ["Areeba" , "Rameeza" ,"Jaweria"];
// var scores = [424 ,438 ,490];
// var total_marks = 500;

// document.write("<h1>Student Score:</h1>")
//  for(let i=0 ; i< studentsNames.length; i++){
//     var percentage = (scores[i]/total_marks) *100 ;
//     document.write("Score of " + studentsNames[i] + " is " + scores[i] + ". Percentage: "+ percentage +"%<br>");
//  }


//========================End of Question 8============================

//=========================Question 9==================================

// // part(a)
// var colors =[ "red" , "purple" , "white" , "black" , "pink"];
// var add_colors = prompt("Enter colors that's you want to add in the beginning");
// colors.unshift(add_colors);
// document.write("<h2>ADDING COLOR IN THE BEGINING</h2>")
// document.write("Adding color : " + colors.join(" , ") )

// // part(b)
// var colors =[ "red" , "purple" , "white" , "black" , "pink"];
// var add_colors = prompt("Enter colors that's you want to add in the end");
// colors.push(add_colors);
// document.write("<h2>ADDING COLOR IN THE END</h2>")
// document.write("Adding color : " + colors.join(" , ") )

// // part(c)
// var colors =[ "red" , "purple" , "white" , "black" , "pink"];
// var add_colors = ["yellow " ," blue"]
// colors.unshift(add_colors);
// document.write("<h2>ADDING TWO MORE COLORS</h2>")
// document.write("Adding color : " + colors.join(" , ") )

// // part(d)
// var colors =[ "red " , "purple " , "white " , "black " , "pink "];
// document.write("<h2>DELETED FIRST COLOR</h2>")
// document.write("Colors : " + colors + "<br>")
// colors.shift();
// document.write("Adding color : " + colors.join(" , ") )

// // part(e)
// var colors =[ "red " , "purple " , "white " , "black " , "pink "];
// document.write("<h2>DELETED LAST COLOR</h2>")
// document.write("Colors : " + colors + "<br>")
// colors.pop();
// document.write("Adding color : " + colors.join(" , ") )

// // part(f)
// var colors =[ "red " , "purple " , "white " , "black " , "pink "];
// var index_color= prompt("Enter the index where you want to add color");
// var add_color = prompt("Enter the color to add at index" + index_color +" : ")
// document.write("<h2>Adding color</h2>")
// document.write("Colors : " + colors + "<br>")
// colors.splice(index_color , 0 , add_color);
// document.write("Adding color at index " + index_color + " :" +colors.join(" ,") )

// // part(g)
// var colors =[ "red " , "purple " , "white " , "black " , "pink "];
// var index_color= prompt("Enter the index where you want to delete colors");
// var del_color = prompt("Enter the number how many colors you want to delete " + index_color +" : ")
// document.write("<h2>DELETED COLOR</h2>")
// document.write("Colors : " + colors + "<br>")
// colors.splice(index_color  , del_color);
// document.write("Deleted color at index " + index_color + " :" +colors.join(" ,") )

//========================End of Question 9============================

//=========================Question 10==================================

// var studentsScores = [320, 230, 480, 120];
// document.write("<h2>ASSENDING ORDER</h2>")
// document.write("Students score: " + studentsScores + "<br>")
// //Result
// var assendingScores = studentsScores.sort();
// document.write("Assending Order : " + assendingScores);

//========================End of Question 10============================

//=========================Question 11==================================

// var cities = ["karachi", "Lahore", "Islamabad", "Peshawar", "Queeta"];
// document.write("<h2>SELECTED CITIES:</h2>")
// document.write("Cities list: " + cities  + "<br>")
// var selected_cities = [];
// //RESULT
// selected_cities = cities.slice(2,4);
// document.write("Selected cities list : " +selected_cities);

//========================End of Question 11============================

//=========================Question 12==================================

// var arr = ["This", "is", "my", "cat"];
// document.write("<h2>COMBINED STRING:</h2>")
// document.write("Array: " + arr  + "<br>")
// //RESULT
// var combinedString = arr.join(" ");
// document.write("String : " + combinedString);

//========================End of Question 12============================

//=========================Question 13==================================

// var fifoArray = [];
// fifoArray.push("Keyboard ");
// fifoArray.push("Mouse ");
// fifoArray.push("Printer ");
// fifoArray.push("Monitor ");
// document.write("<h1>Devices</h1>")
// document.write("Devices: " +fifoArray + "<br>")

// var first = fifoArray.shift();
// var second = fifoArray.shift();
// var third = fifoArray.shift();
// var fourth = fifoArray.shift();

// document.write("<h1>Out Values</h1>")

// document.write("Out firstvalue:<br>")
// document.write( first + "<br>")
// document.write("Out Secondvalue :<br>")
// document.write( second + "<br>")
// document.write("Out Thirdvalue:<br>")
// document.write(third + "<br>")
// document.write("Out lastvalue<br>")
// document.write( fourth + "<br>")


//========================End of Question 13============================

//=========================Question 14==================================

// var revFifoArray = [];

// revFifoArray.push("Keyboard ");
// revFifoArray.push("Mouse ");
// revFifoArray.push("Printer ");
// revFifoArray.push("Monitor ");
// document.write("<h1>Devices</h1>")
// document.write("Devices: " +revFifoArray + "<br>")

// var fourth = revFifoArray.pop();
// var third = revFifoArray.pop();
// var second = revFifoArray.pop();
// var first = revFifoArray.pop();

// document.write("<h1>Out Values</h1>")
// document.write("Out Lastvalue:<br>")
// document.write( fourth + "<br>");
// document.write("Out Thirdvalue:<br>")
// document.write(third + "<br>");
// document.write("Out Secondvalue :<br>")
// document.write( second + "<br>");
// document.write("Out firstvalue:<br>")
// document.write( first + "<br>");


//========================End of Question 14============================

//=========================Question 15==================================


// var manufactures = ["Select one", "Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// var selectMenu = "<select>";

// for (var i = 0; i < manufactures.length; i++) {
//  selectMenu += "<option>" + manufactures[i] + "</option>";
// }
// selectMenu += "</select>";
// document.write(selectMenu);

//========================End of Question 15============================