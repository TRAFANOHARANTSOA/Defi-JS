window.onscroll = function() { scrollIndicator() } ;



function scrollIndicator() {
  var nbTotalPixPage = document.documentElement.scrollTop;
  var nbPixElement = document.documentElement.scrollHeight;
  var nbPixHeightInt = document.documentElement.clientHeight;
  var height = nbPixElement - nbPixHeightInt;
  var scroll = (nbTotalPixPage / height) * 100;
  document.getElementById("bar").style.width = scroll + "%";
  console.log(nbTotalPixPage);
  console.log(nbPixElement);
  console.log(nbPixHeightInt);
  console.log(height);
  console.log(scroll);
}
