document.getElementById('checkbox').addEventListener('click', function() {
  var password = document.getElementById('input');
  if(password.type === "password"){
    password.type = "text";
    document.getElementById('show').style.display = "none";
    document.getElementById('hide').style.display = "block";

  }else{
    password.type = "password";
    document.getElementById('show').style.display = "block";
    document.getElementById('hide').style.display = "none";

  }
  console.log(password);
});
