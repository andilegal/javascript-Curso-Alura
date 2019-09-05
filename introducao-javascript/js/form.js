var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona")
  // EXTRAINDO INFORMACOES DO PACIENTE
  var paciente = obterPacienreDoFormulario(form)

  // CRIA A TR E TD DO PACIENTE

  var erros = validaPaciente(paciente)
  console.log(erros)

  if (erros.length > 0) {
    exibiMensagensDeErro(erros)
    return
  }

  //ADICIONA O PACIENTE NA TABELA

  adicionaPacienteNaTabela(paciente)

  form.reset()
  var mensagemErro = document.querySelector('#mensagens-erro')
  mensagemErro.innerHTML = ''
})

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente)
  var tabela = document.querySelector("#tabela-pacientes")
  tabela.appendChild(pacienteTr)



}


function exibiMensagensDeErro(erros) {
  var ul = document.querySelector('#mensagens-erro')
  ul.innerHTML = ''
  erros.forEach(function (erro) {
    var li = document.createElement('li');
    li.textContent = erro
    ul.appendChild(li)
  });

}


function obterPacienreDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.peso.value)
  }
  return paciente
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr")
  pacienteTr.classList.add('paciente')

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

  return pacienteTr
}

function montaTd(dado, classe) {

  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function validaPaciente(paciente) {
  var erros = []

  if (paciente.nome.length == 0) {
    erros.push('O nome nãopode ser em branco')
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('Peso é invalido')
  }

  if (!validaAltura(paciente.altura)) {
    erros.push('Altura é invalida')
  }
  if (paciente.gordura.length == 0) {
    erros.push('Gordura nao pode ser em branco')
  }
  if (paciente.peso.length == 0) {
    erros.push('Peso não pode ser em branco')
  }
  if (paciente.altura.length == 0) {
    erros.push('A altura não pode ser em branco')

  }
  return erros

}
