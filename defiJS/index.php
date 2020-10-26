<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
<!--<script type="text/javascript">
var bavarde = true;
if (bavarde == true) {
  console.log( "Bon dieu tu parles autant si ce n'est plus que Célia")
}
  else {
    console.log("Ahhhhhh du silence ça fait du bien")
  }
</script>

<script type="text/javascript">
  const nom="RAFANOHARANTSOA"
  const prenom="TSIRY"
  console.log("votre nom est "+nom+" et votre prenom est "+prenom+" !");
</script>-->

<canvas id="canv" width="100%" height="100%">
</canvas><style>
        #canv{
           border:solid 1px #EEE;
        }
</style>

<script>
var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(80, 150, 70, 50);
ctx.fillStyle="#FF0000";
ctx.fill();
ctx.closePath();
</script>

<script type="text/javascript">

var titreFilm = ['the mask', 'Jumanji', 'terminator', 'predator'];

console.log(titreFilm [Math.floor(Math.random() * titreFilm.length)]);

</script>


</body>
</html>
