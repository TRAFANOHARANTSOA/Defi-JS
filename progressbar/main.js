window.onload = function(){
  const progressBar = document.getElementById('redborder');
  let progress = 0;
  let stopProgress = setInterval(function (){
    if (progress >= 100) {
      clearInterval(stopProgress);
      displayContent.style.display = "block";
    } else {
      progress++;
      progressBar.style.border = progress + '%';
      console.log(progress);
    }
  }, 10);

}
