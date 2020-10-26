/*compteur click*/
/*const mybtn = document.getElementById('myBtn');
const cntClic = document.getElementById('cntClic');

var nbClic = 0;
mybtn.addEventListener('click', function(){
nbClic++;
console.log(nbClic);
cntClic.innerHTML = nbClic;
});*/
/*headortails*/
/*const myBtn = document.getElementById('myBtn');
var result = document.getElementById('result');

myBtn.addEventListener('click', function(){
headOrTails();

});

function headOrTails(){
  if (Math.floor(Math.random()*2) == 0){
    result.innerHTML = 'tails';
  } else{
    result.innerHTML = 'head';
  }
}*/
/*convertisseur binaire*/
/*Solution 1*/
const convert = document.getElementById("convert") ;
let crypted = document.getElementById("crypted");

convert.addEventListener("click", function(){
  let code = document.getElementById("msgToCode").value;
  console.log(code);
  let array = [];
  for (var i = 0; i < code.length; i++){
    let carcode = code.charCodeAt(i);
    console.log(carcode);
    let binary = Number(carcode.toString(2));
    array.push(binary);
    crypted.innerHTML = array;
    console.log(binary);
  }
});

/*Solution 2*/

/*const convert = document.getElementById("convert") ;
let input = document.getElementById('msgToCode');
let output = document.getElementById('crypted');

convert.addEventListener("click", function() {
  let result = input.value;
  console.log(text2Binary(result));
  output.innerHTML = text2Binary(result);
});

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}*/
