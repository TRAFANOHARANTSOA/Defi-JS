const player = document.getElementById('player');
const gameContainer = document.getElementById('gameContainer');
const moveSize = 24;
var playerWalk = 0;


document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    if(player.style.top <= "0px"){
      playerWalk = playerWalk;
      console.log(player.style.top);
    }else{
      playerWalk = playerWalk + 1;
      if(playerWalk%2 == 0){
        player.style.backgroundImage = "url('img/img5.png')";
      }else{
        player.style.backgroundImage = "url('img/img6.png')";
      }
      player.style.top = (player.offsetTop - moveSize) + "px";
      console.log(player.style.top);
    }
  } else if (event.code == 'ArrowRight') {
    if(player.style.left >= "768px"){
      playerWalk = player.style.left;
    } else {
      playerWalk = playerWalk + 1;
      if(playerWalk%2 == 0){

        player.style.backgroundImage = "url('img/img7.png')";
      }else{
        player.style.backgroundImage = "url('img/img8.png')";
      }
      player.style.left = (player.offsetLeft + moveSize) + "px";
      console.log(player.style.left);
    }
  }else if (event.code == 'ArrowDown') {
    if(player.style.top >= "768px"){
      playerWalk = player.style.top;
    }else {
      playerWalk = playerWalk + 1;
      if(playerWalk%2 == 0){

        player.style.backgroundImage = "url('img/img1.png')";
      }else{
        player.style.backgroundImage = "url('img/img2.png')";
      }
      player.style.top = (player.offsetTop + moveSize) + "px";
      console.log(player.style.top);

    }
    }else if (event.code == 'ArrowLeft') {
    if(player.style.left <= "0px"){
      playerWalk = playerWalk;
    } else {
      playerWalk = playerWalk + 1;
      if(playerWalk%2 == 0){

        player.style.backgroundImage = "url('img/img3.png')";
      }else{
        player.style.backgroundImage = "url('img/img4.png')";
      }
      player.style.left = (player.offsetLeft - moveSize) + "px";
    }
    }

});
