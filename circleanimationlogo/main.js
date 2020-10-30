const logo = document.getElementById('logo');
let value = 0 ;
function animLogo(){
  logo.style.height= value + "%";
  logo.style.width = value/2 +"%";
  logo.style.fontSize = value*5 +"%";
}
let stopValue = setInterval(function(){
  if(value >= 50){
    clearInterval(stopValue);
}else{
  value++;
  animLogo();
  console.log(value);
}
},10);
