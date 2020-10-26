document.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("resize", detectOrientation) ;
  detectOrientation() ;
});

function detectOrientation(){
  if (window.orientation==0){
    document.getElementById('displayContent').style.display='none';
    document.getElementById('rotateScreen').style.display='block';
  } else{
    document.getElementById('displayContent').style.display='block';
    document.getElementById('rotateScreen').style.display='none';
  }
  console.log();
}
