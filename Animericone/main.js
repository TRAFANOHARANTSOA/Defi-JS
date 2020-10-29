

function balanceScale() {
balanceIcon = document.getElementById('balanceIcon');
balanceIcon.innerHTML = "&#xf24e;"
setTimeout(function(){balanceIcon.innerHTML = "&#xf515;"},1000);
setTimeout(function(){balanceIcon.innerHTML = "&#xf24e;"},2000);
setTimeout(function(){balanceIcon.innerHTML = "&#xf516;"},3000);
}
balanceScale();
setInterval(balanceScale , 4000)
