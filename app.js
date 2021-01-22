// Date Methods

// var a = new Date();
// document.write(a);

// var monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var a = new Date();
// var theMonth = a.getMonth();
// var currentMonth = monthNames[theMonth];
// document.write(currentMonth);

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// alert("Today is " + c);

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// if(c === "Sun" || c === "Sat"){
//     alert("It's Fun day")
// }

// #5 Missing

// var a = new Date();
// var b = a.getTime();
// var c = b/(1000*60);
// document.write("Current Date: " + a + "<br />");
// document.write("Elapsed MilliSeconds since January 01, 1970: " + b + "<br />");
// document.write("Elapsed Minutes since January 01, 1970: " + c);

// var a = new Date();
// var b = a.getHours();
// if(b <= 12){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// var laterDate = new Date("Thu Dec 31 2020");
// document.write("Later Date: " + laterDate);

// var a = new Date();
// var b = a.getTime();
// var c = new Date("June 18, 2015");
// var d = c.getTime();
// var e = b - d;
// var f = e/(1000*60*60*24);
// var g = Math.floor(f);
// document.write(g + " days have passed since 1st Ramzan, 2015");

// var a = new Date("Sat Dec 05 2015 22:50:16");
// var b = a.getTime();
// var c = new Date("Jan 01, 2015");
// var d = c.getTime();
// var e = b - d;
// var f = e/(1000*60);
// var g = Math.ceil(f);
// document.write("On reference date " + a + "," + "<br />" + g + " seconds had passed since beginning of 2015");

// 11 Missing

// #12 Missing

// var a = new Date();
// var b = a.getTime();
// var usersDOB = prompt("Enter your birth")
// var c = new Date(usersDOB);
// var d = c.getTime();
// var ageDiff = b-d;
// var ageCalc = ageDiff/(1000*60*60*24*30*12);
// ageCalc = Math.floor(ageCalc);
// document.write("Your age is: " + ageCalc + "<br />" + "Your birth year is: " + usersDOB);

// var cusName = prompt("Enter your name");
// var currentMonth = prompt("Enter current month");
// var numOfUnits = prompt("Enter number of Units");
// var chargesPerUnit = 16;
// var amtInDueDate = numOfUnits * chargesPerUnit;
// var latePaySurcharge = 350;
// var grossAmtPayable = amtInDueDate + latePaySurcharge;
// document.write("<h1> K-Electric Bill </h1>" + "<br />");
// document.write("Customer Name: " + cusName + "<br />" + "Month: " + currentMonth + "<br />" + "Number of Units: " + numOfUnits + "<br />" + "Charges per Unit: " + chargesPerUnit + "<br />" + "Net Amount Payable (within Due Date): " + amtInDueDate + "<br />" + "Late Payment Surcharge: " + latePaySurcharge + "<br />" + "Gross Amount Payable (after Due Date): " + grossAmtPayable);

// Functions

// function tellTime() {
//     var now = new Date();
//     document.write(now);
// }
// tellTime();

// function greet(){
//     var firstName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     document.write("Hello " + firstName + " " + lastName);
// }
// greet();

// function sum(){
//     var num1 = +prompt("Enter a number");
//     var num2 = +prompt("Enter a number");
//     document.write(num1 + num2);
// }
// sum();

// function value(a,b){
//     alert(a + b);
// }
// value(5,8);

// function square(a){
//     document.write(a*a);
// }
// square(7);

// function factorial(){
//     var num = prompt("Enter a number");
//     var fact = 1;
//     for(var i = 1; i <= num; i++){
//         fact = fact*i;
//     }
//     return fact;
// }
// var factOfNum = factorial();
// document.write(factOfNum);

// function counting(){
//     var start = prompt("Enter Starting Number");
//     var end = prompt("Enter Ending Number");
//     for (var i = start; i <= end; i++){
//         document.write(i + "<br />")
//     }
// }
// counting();

// #8 Not Included

// function area(a,b){
//     document.write(a*b);
// }
// area(5,4);
// function area(a,b){
//     document.write(a*b);
// }
// var width = prompt("Enter Width");
// var height = prompt("Enter Height");
// area(width,height);

// var str = prompt("Enter a word");
// function palindrome(){
//     var strSplit = str.split('');
//     var strRev = strSplit.reverse().join('');
//     if(str === strRev){
//         alert("Yeah! Its a Palindrome.");
//     }else{
//         alert("Sorry! Its not a Palindrome.")
//     }
// }
// palindrome();

// function capitalized(sentence){
//     var sentenceStr = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
//     var sentenceSplit = sentence.split(' ').map(sentenceStr);
//     var sentenceJoin = sentenceSplit.join(' ');
//     return document.write(sentenceJoin);
// }
// capitalized("the quick brown fox jumps over the lazy dog");