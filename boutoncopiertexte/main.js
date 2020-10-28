const buttonCopy = document.getElementById("buttonCopy") ;
const buttonPaste = document.getElementById("buttonPaste") ;

buttonCopy.addEventListener("click", function() {
var copyText = document.getElementById('copyText');
var select = copyText.select();
var copy = document.execCommand("copy");
console.log(select);
});

buttonPaste.addEventListener("click", function() {
if (copy = true){
  var pasteText = document.getElementById('pasteText');
  var focus = pasteText.select()
  var paste = document.execCommand("paste");
  pasteText.innerHTML = paste;


  console.log(paste);
}else{
   'coucou'
}
});
console.log(document.execCommand("paste"));
