// Selecting the main elements on the page
var body = document.querySelector("body");
var button = document.querySelector(".btn");
var h1 = document.querySelector("h1");

// console.log(body);
// console.log(button);
// console.log(h1);

// var hexGenerator = function() {
//   var length = 6;
//   var chars = "0123456789ABCDEF";
//   var hex = "#";
//   while (length--) hex += chars[(Math.random() * 16) | 0];
//   return hex;
// };

var hexGenerator = function() {
  var letters = "0123456789ABCDEF";
  var color = "";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16) | 0];
  };
  return "#" + color;
};

console.log(hexGenerator());

// Loads the page with random background color and hex value
// Values are not curently matching
body.style.backgroundColor = hexGenerator();
h1.innerText = hexGenerator();

// Setting up button click to trigger random color
button.addEventListener('click', function(){
  console.log(hexGenerator());
});