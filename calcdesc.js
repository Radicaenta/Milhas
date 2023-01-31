function calcdesc(){
  var valor = document.getElementById("valor").value;
  var desc = document.getElementById("desc").value;
  var frete = document.getElementById("frete").value;

  var custo = valor - (valor * (desc / 100))
  var rcalc = custo + (frete*1);

  document.getElementById("resp").innerHTML = rcalc.toFixed(2);
}

// function copy() {
//   var copyText = document.getElementById("a");
//   copyText.select();
//   copyText.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(copyText.value);

//   var tooltip = document.getElementById("myTooltip");
//   tooltip.innerHTML = "Copied: " + copyText.value;
// }