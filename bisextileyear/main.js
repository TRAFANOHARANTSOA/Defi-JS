const check = document.getElementById("check") ;

check.addEventListener("click", function() {
    let year = document.getElementById("year").value ;
    if (year%4==0 && year%100!==0 || year%400==0){
      document.getElementById('result').innerHTML = 'année Bisextile';}
      else {      document.getElementById('result').innerHTML = 'année non Bisextile';}

});
