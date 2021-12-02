function validarEmail(fDados) {
	var erro = true;
	if (fDados.nome.value == "")
	{
		document.getElementById("nome").style.backgroundColor = "#ffe5e5";
		fDados.nome.focus();
		erro = false;
	}else if (fDados.email.value == "")
	{
		document.getElementById("email").style.backgroundColor = "#ffe5e5";
		fDados.email.focus();
		erro = false;
	}else if (fDados.descricao.value == "")
	{
		document.getElementById("descricao").style.backgroundColor = "#ffe5e5";
		fDados.descricao.focus();
		erro = false;
	}/*else if (!fDados.checkConcordo.checked)
	{
		document.getElementById("checkConcordo").style.backgroundColor = "#ffe5e5";
		fDados.checkConcordo.focus();
		erro = false;
	}*/

	if (erro) {
		alert("E-mail enviado com sucesso!");
		return true;
	} else {
		alert("Todos os campos são obrigatórios!");
		return false;
	}
}