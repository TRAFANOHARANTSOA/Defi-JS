window.onscroll = function() { slideDown() } ;

function slideDown() {
  var nbPixScrolled = document.documentElement.scrollTop;
  console.log(nbPixScrolled);
  if(nbPixScrolled > 240){
        document.getElementById("navbar").style.top = "0px";
  }if(nbPixScrolled < 240){
      document.getElementById("navbar").style.top = "-56px";
  }
}
