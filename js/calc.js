var add = function() {
  num1 = parseInt(prompt("Enter First Number"));
  num2 = parseInt(prompt("Enter Second Number"));
  alert(num1+num2);
};

var add2 = function(num1,num2) {
  //num1 = parseInt(prompt("Enter First Number"));
  //num2 = parseInt(prompt("Enter Second Number"));
  return(num1+num2);
};

var subtract = function() {
  num1 = parseInt(prompt("Enter First Number"));
  num2 = parseInt(prompt("Enter Second Number"));
  alert(num1-num2);
};

var multiply = function(num1, num2) {
  num1 = parseInt(prompt("Enter First Number"));
  num2 = parseInt(prompt("Enter Second Number"));
  alert(num1*num2);
};

var divide = function(num1, num2) {
  num1 = parseInt(prompt("Enter First Number"));
  num2 = parseInt(prompt("Enter Second Number"));
  alert(num1/num2);
};

var BMI = function() {
    var height = prompt("Enter Your Height in inches");
    var weight = prompt("Enter Your Weight in Pounds");

    alert((weight*703)/(height));
}


//alert(BMI(parseInt(prompt("Enter Your Height:")),parseInt(prompt("Enter Your Weight:"))));

//alert(add2(parseInt(prompt("Enter A number:")),parseInt(prompt("Enter another number:"))));

// add2(2,3);

/*
F = C × 1.8 + 32
C = (F - 32) / 1.8
*/

/* var cel = parseInt(prompt("What is the temp in celsius?"));
var f = cel * 1.8 + 32;
alert(f);

var far = parseInt(prompt("What is the temp in fahrenheit?"));
var c = (far - 32) / 1.8;
alert(c);
*/














/* 1 gallon  = 3.785411784 liters */


var totalgallons = function() {
  //alert("this is totalgallons function.");
  var gallons = prompt("How many gallons do we have?");
  var liter = parseFloat(gallons) * 3.785411784;
  alert("you have total " + liter);
//  return liter;
}
//totalgallons(); //call method//

var result = totalgallons();
alert(result + 6);

















 

/* will convert gallons to liters*/
/* formula =*/
