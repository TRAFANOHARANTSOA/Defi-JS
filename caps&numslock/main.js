document.getElementById("input").addEventListener("keyup", function(event) {
  const capsLock = event.getModifierState("CapsLock");
  const verNum = event.getModifierState("NumLock");
  const warning = document.getElementById('warning');
  const warningNums = document.getElementById('warningNums') ;
  const warningCaps = document.getElementById('warningCaps') ;
  console.log(capsLock);
  console.log(verNum);
  if (capsLock == true && verNum == true){
    warning.style.display = "block";
    warningNums.style.display = "none";
    warningCaps.style.display = "none";
  }else{
    warning.style.display = "none";
    if(capsLock == true){
    warningCaps.style.display = "block";
    } else {
      warningCaps.style.display = "none";
    }
    if(verNum == true){
      warningNums.style.display = "block";
    }else{
      warningNums.style.display = "none";
    }
  }
});
