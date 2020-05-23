function ex06() {
  var peso = prompt("Qual seu peso?");
  var altura = prompt("Qual sua altura?");
  var a = imc(peso, altura);
  alert(`seu imc é de ${a}`);
}

function imc(peso, altura) {
  return peso / (altura * altura);
}
