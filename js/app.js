
	var cont = 0;
	var punto = 0;
	var signo = 0;
	var numero1 = 0;
	var numero2 = 0;
	var operacion = 0;

	document.getElementById("1").onclick = mostrarNum1;
	document.getElementById("2").onclick = mostrarNum2;
	document.getElementById("3").onclick = mostrarNum3;
	document.getElementById("4").onclick = mostrarNum4;
	document.getElementById("5").onclick = mostrarNum5;
	document.getElementById("6").onclick = mostrarNum6;
	document.getElementById("7").onclick = mostrarNum7;
	document.getElementById("8").onclick = mostrarNum8;
	document.getElementById("9").onclick = mostrarNum9;
	document.getElementById("0").onclick = mostrarNum0;
	document.getElementById("on").onclick = reiniciar;
	document.getElementById("punto").onclick = mostrarPunto;
	document.getElementById("sign").onclick = mostrarSigno;

	function mostrarNum1(){

		if(cont < 8){

			var numDisplay = display();

			if(numDisplay == "0"){
				document.getElementById("display").innerHTML = "1";
			}else{
				document.getElementById("display").innerHTML = numDisplay + "1";
			}
			cont ++;

		}
	}

	function mostrarNum2(){

		if(cont < 8){

			var numDisplay = display();

			if(numDisplay == "0"){
				document.getElementById("display").innerHTML = "2";
			}else{
				document.getElementById("display").innerHTML = numDisplay + "2";
			}
			cont ++;

		}
	}

	function mostrarNum3(){	
		
		if(cont < 8){
		
			var numDisplay = display();

			if(numDisplay == "0"){
				document.getElementById("display").innerHTML = "3";
			}else{
				document.getElementById("display").innerHTML = numDisplay + "3";
			}
			cont ++;

		}
	}

	function mostrarNum4(){	

		if(cont < 8){

			var numDisplay = display();
			
			if(numDisplay == "0"){
				document.getElementById("display").innerHTML = "4";
			}else{
				document.getElementById("display").innerHTML = numDisplay + "4";
			}
			cont ++;

		}
	}

	function mostrarNum5(){	
		
		if(cont < 8){
			
			var numDisplay = display();

			if(numDisplay == "0"){
				document.getElementById("display").innerHTML = "5";
			}else{
				document.getElementById("display").innerHTML = numDisplay + "5";
			}
			cont ++;

		}
	}

	function mostrarNum6(){	
		
		if(cont < 8){
		
			var numDisplay = display();

			if(numDisplay == "0"){
				document.getElementById("display").innerHTML = "6";
			}else{
				document.getElementById("display").innerHTML = numDisplay + "6";
			}
			cont ++;

		}
	}

	function mostrarNum7(){	
	
		if(cont < 8){

			var numDisplay = display();

			if(numDisplay == "0"){
				document.getElementById("display").innerHTML = "7";
			}else{
				document.getElementById("display").innerHTML = numDisplay + "7";
			}
			cont ++;

		}
	}

	function mostrarNum8(){	
		
		if(cont < 8){

			var numDisplay = display();

			if(numDisplay == "0"){
				document.getElementById("display").innerHTML = "8";
			}else{
				document.getElementById("display").innerHTML = numDisplay + "8";
			}
			cont ++;

		}
	}

	function mostrarNum9(){	
		
		if(cont < 8){

			var numDisplay = display();

			if(numDisplay == "0"){
				document.getElementById("display").innerHTML = "9";
			}else{
				document.getElementById("display").innerHTML = numDisplay + "9";
			}
			cont ++;

		}
	}

	function mostrarNum0(){

		if(cont < 8){

			var numDisplay = display();

			if (numDisplay != "0"){
				document.getElementById("display").innerHTML = numDisplay + "0";
			}
			cont ++;

		}
	}


	function display(){
		return document.getElementById("display").innerHTML;
	}


//---------------------------------------------------------------
//---------------------------------------------------------------


	function reiniciar(){
	
		document.getElementById("display").innerHTML = "0";

		cont = 0;
		punto = 0;
		signo = 0;
	}

	function mostrarPunto(){

		var numDisplay = document.getElementById("display").innerHTML;

		if (punto != 1){
			document.getElementById("display").innerHTML = numDisplay + ".";
			punto ++;
		}	
		cont ++;	
	}

	function mostrarSigno(){

		var numDisplay = document.getElementById("display").innerHTML;

		if (numDisplay != "0"){
			if(signo % 2 == 0){
				document.getElementById("display").innerHTML = "-" + numDisplay;
			}else{
				document.getElementById("display").innerHTML = numDisplay.substr(1);
			}
			signo++;
		}
	}


//---------------------------------------------------------------
//---------------------------------------------------------------


	var miCalculadora = (function (){
		
		var resultado = 0;
		
		return{
			sumar: function(numero1,numero2){
				var resultado = numero1 + numero2;
				return resultado;
			},
			restar: function(numero1,numero2){
				var resultado = numero1 - numero2;
				return resultado;
			},
			por: function(numero1,numero2){
				var resultado = numero1 * numero2;
				return resultado;
			},
			dividido: function(numero1,numero2){
				var resultado = numero1 / numero2;
				return resultado;
			}
		};
	})();

	document.getElementById("mas").onclick = obtenerSuma;
	document.getElementById("menos").onclick = obtenerResta;
	document.getElementById("por").onclick = obtenerPor;
	document.getElementById("dividido").onclick = obtenerDividido;

	function obtenerSuma(){
		obtenerNumero();
		operacion = 1;
		cont = 0;
	}

	function obtenerResta(){
		obtenerNumero();
		operacion = 2;
		cont = 0;
	}

	function obtenerPor(){
		obtenerNumero();
		operacion = 3;
		cont = 0;
	}

	function obtenerDividido(){
		obtenerNumero();
		operacion = 4;
		cont = 0;
	}

	function obtenerNumero(){
		numero1 = parseInt(document.getElementById("display").innerHTML);
		document.getElementById("display").innerHTML = "";
	}

	document.getElementById("igual").onclick = mostrarResultado;

	function mostrarResultado(){

		numero2 = parseInt(document.getElementById("display").innerHTML);
		document.getElementById("display").innerHTML = "";

		if (operacion === 1){
			document.getElementById("display").innerHTML = miCalculadora.sumar(numero1,numero2);
			redondear();
		}else if (operacion === 2){
			document.getElementById("display").innerHTML = miCalculadora.restar(numero1,numero2);
			redondear();
		}else if (operacion === 3){
			document.getElementById("display").innerHTML = miCalculadora.por(numero1,numero2);
			redondear();
		}else if (operacion === 4){
			document.getElementById("display").innerHTML = miCalculadora.dividido(numero1,numero2);
			redondear();
		}

		operacion = 5;
	}

	function redondear(){
		var redondeo = document.getElementById("display").innerHTML;
		redondeo = redondeo.substr(0,8);
		document.getElementById("display").innerHTML = redondeo;
	}

