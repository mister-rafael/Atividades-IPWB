function minhafuncao(arg1,arg2){
		var soma = arg1 + arg2;
		var msg = 'A soma é igual a ';
		alert(msg + soma)
		var flag = true;

		if(flag)
			alert('Verdadeiro')
		else
			alert('Falso')
	}

	function raiz(arg){
		var raiz = Math.sqrt(arg)
		alert('A raiz de '+arg+' é = '+raiz)
	}
	function escreve(){
		var texto = prompt("Digite um texto qualquer!");
		document.getElementById("minhaDiv").innerHTML = texto;
	}

/*Funções do Exercicio*/

function escreveNum(){
	var num = prompt("Digite um numero qualquer!");
	var info = '';
	var para = document.querySelector('p');

	for (var i = 1; i <= num; i++) {
  		info += i + ' ';
	}
	document.getElementById("divTeste").innerHTML = info;
}
function escreveModal(){
	var texto = prompt("Digite um texto qualquer!");
	document.getElementById("corpo_modal").innerHTML = texto;
	alert()
}