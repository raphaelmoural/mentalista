function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);

  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Você deve colocar um número de 0 a 10";
  } else {
    resultado.innerHTML = "Errou, o número secreto era " + numeroSecreto;
  }
}
var resultado = document.getElementById("resultado");