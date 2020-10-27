document.getElementById('btn').addEventListener('click', function() {
  const progressBar = document.getElementById('progressBar');
  let progress = 0;
  let stopProgress = setInterval(function (){
    if (progress >= 100) {
      clearInterval(stopProgress);
      progressBar.style.display = "none";
    } else {
      progress++;
      progressBar.style.width = progress + '%';
      progressBar.style.display = "block";
      document.getElementById('interval').innerHTML = progress + "%";
      console.log(progress);
    }
  }, 50);
});
