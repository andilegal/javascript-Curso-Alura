var titulo = (document.querySelector('.titulo'))

var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]
  var tdPeso = paciente.querySelector(".info-peso")
  var peso = tdPeso.textContent

  var tdAltura = paciente.querySelector(".info-altura")
  var altura = tdAltura.textContent

  var tdImc = paciente.querySelector(".info-imc")

  var pesoEhValido = validaPeso(peso)
  var alturaEHValida = validaAltura(altura)

  if (!pesoEhValido) {
    console.log("Peso invalido")
    pesoEhValido = false
    tdImc.textContent = 'Peso invalido'
    paciente.classList.add('paciente-invalido')


  } if (!validaAltura) {
    console.log("Altura invalida")
    alturaEHValida = false
    tdAltura.textContent = 'altura invalida'
    paciente.classList.add('paciente-invalido')

  }
  if (alturaEHValida && pesoEhValido) {
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc

  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 400) {
    return true
  } else {
    return false
  }
}

function validaAltura(altura) {

  if (altura >= 0 && altura <= 3.0) {
    return true
  } else {
    return false
  }
}

function calculaImc(peso, altura) {
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2)

}

