
function Login(event) {
event.preventDefault();
var email = document.getElementsByName('email')[0].value;
email = email.toLowerCase();
var password = document.getElementsByName('password')[0].value;
password = password.toLowerCase();

if (email == "higor.silva35@fatec.sp.gov.br" && password == "1234") {
    window.location = "index.html";
}

else if (email == "joao.silva506@fatec.sp.gov.br" && password == "1234") {
    window.location = "index.html";
}

else if (email == "myrelle.santos@fatec.sp.gov.br" && password == "1234") {
    window.location = "index.html";
}


else if (email == "luciana.baptista@fatec.sp.gov.br" && password == "1234") {
window.location = "index.html";
}

else{
    alert("Dados incorretos, tente novamente");
}
}

function registrar(){
    alert("E-mail já cadastrado, por favor tente entrar com seu e-mail da fatec e senha == 1234")
}

