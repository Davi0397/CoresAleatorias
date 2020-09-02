	function color(){
		var ElementoHTML = document.getElementById("ElementoHTML");
		//Definindo o elemento que irá mudar de cor pelo seu ID

		var p3 = Math.floor(Math.random() * 240);//definindo os valores que serão gerados aleatoriamente
		var p4 = Math.floor(Math.random() * 240);//definindo os valores que serão gerados aleatoriamente
		var p5 = Math.floor(Math.random() * 240);//definindo os valores que serão gerados aleatoriamente


		ElementoHTML.style.background = "rgb("+p3+","+p4+","+p5+")";
		//pegando o elemento e definindo o background
	}

function trocar(){
	setInterval(color,2000);
	//definindo a frequência que irá acontecer
}
