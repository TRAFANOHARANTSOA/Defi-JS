const title = document.getElementById('title');
let value = 0;
function changeTitle() {
  if(value < 4){
    value++;
    console.log(value);
    if (value == 1){
      title.innerText = "je suis designer web,";
    }else{
      " ";
    }
    if (value == 2){
      title.innerText = "je sais concevoir ";
    }else{
      " ";
    }
    if (value == 3){
      title.innerText = "et développer ";
    }else{
      " ";
    }
    if (value == 4){
      title.innerText = "des sites web! ";
    }else{
      " ";
    }
  }else{
      value=0;
      title.innerText = "salut !";
  }
}

setInterval(changeTitle, 3000);
