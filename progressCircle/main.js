const progressBar = document.getElementById('progressBar');
var progress = 0;
window.onload = setInterval(function (){
  if (progress >= 100) {
    clearInterval(window.onload);
  } else {
    progress++;
    progressBar.style.width = progress + '%';
    progressBar.style.height = progress + '%';
    console.log(progress);
  }
}, 10);
