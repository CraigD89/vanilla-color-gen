var body = document.getElementsByTagName("body");
var button = document.getElementsByClassName("btn");
var h1 = document.getElementsByTagName("h1");

var hexGenerator = function(){
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
};
// console.log(hexGenerator());