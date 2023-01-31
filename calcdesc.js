function calcdesc(){
  var valor = document.getElementById("valor").value;
  var desc = document.getElementById("desc").value;
  var frete = document.getElementById("frete").value;

  var custo = valor - (valor * (desc / 100))
  var rcalc = custo + (frete*1);

  document.getElementById("resp").innerHTML = rcalc.toFixed(2);
}
