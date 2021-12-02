function validaAssinatura(fDados) {

	var erro = true;

	if (fDados.nome.value == "") {
		document.getElementById("nome").style.backgroundColor = "#ffe5e5";
		fDados.nome.focus();
		erro = false;
	} else if (fDados.curso.value == "undefined") {
		document.getElementById("curso").style.backgroundColor = "#ffe5e5";
		alert("Volte a tela inicial e adicione um item ao carrinho")
		fDados.curso.focus();
		erro = false;

	} else if (fDados.preco.value == "undefined") {
		document.getElementById("preco").style.backgroundColor = "#ffe5e5";
		fDados.preco.focus();
		erro = false;
	} else if (fDados.estado.value == "") {
		document.getElementById("estado").style.backgroundColor = "#ffe5e5";
		fDados.estado.focus();
		erro = false;
	} else if (fDados.idade.value == "0") {
		document.getElementById("idade").style.backgroundColor = "#ffe5e5";
		fDados.idade.focus();
		erro = false;
	}

	var sexoOk = false;
	for (var i = 0; i < fDados.sexo.length; i++) {
		if (fDados.sexo[i].checked == true) {
			sexoOk = true;
			break;
		}
	}
	if (!sexoOk) // sexoOk == false
	{
		alert("O campo \"Sexo\" não foi selecionado.\nSelecione uma opção para o campo \"Sexo\".");
		fDados.sexo[0].focus();
		erro = false;
	}

	if (!fDados.concordo.checked)
	{
		alert("O campo \"Concordo com o site\" não está selecionado.");
		fDados.concordo.focus();
		erro = false;
	}

	if (erro) {
		alert("Compra efetuada com sucesso!");
		window.open("./index.html");
		return true;
	} else {
		alert("Preencha todos os campos");
		return false;
	}
}