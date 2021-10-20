document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("email").value != "" && document.getElementById("password").value != "" && document.getElementById("nome").value != "" && document.getElementById("cpf").value != "" && document.getElementById("address").value != "" && document.getElementById("address2").value != ""  && document.getElementById("cidade").value != "" && document.getElementById("state").value != "" && document.getElementById("telefone").value != "") {

    alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{ 
    alert("Por favor, preenha todas as abas do cadrastro!")
  } 
}

