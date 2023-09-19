// Ajustar o Tamannho do Palco do jogo 

	var altura = 0
	var largura = 0
	var vidas = 1
	var tempo = 15

	var criaMosquitoTempo = 1500

	var nivel = window.location.search
	nivel = nivel.replace('?', '')

	if(nivel === 'normal') {
		//1500
		criaMosquitoTempo = 1500
	} else if (nivel === 'dificil') {
		//1000
		criaMosquitoTempo = 1000
	} else if (nivel === 'saymon') {
		//750
		criaMosquitoTempo = 750
	}

 	function modificaTamanhaPalcoJogo () {
	
		altura = window.innerHeight 
		largura = window.innerWidth

			console.log(altura, largura)
}

	modificaTamanhaPalcoJogo()

	var cronometro = setInterval(function() {

		tempo -= 1

		if( tempo < 0){
			clearInterval(cronometro)
			clearInterval(criaMosquito)
			window.location.href =  'vitoria.html'

		} else {
		document.getElementById('cronometro').innerHTML = tempo
		}
	}, 1000)

// Criar posições Randomicas para os mosquistos. Com base na altura e largura do Palco
	function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
		if(document.getElementById('mosquito')) {
			document.getElementById('mosquito').remove()
		//substitui a imagem do coração cheio pelo vazio	
			///console.log('elem. selecionado foi: v' + vidas)
			// FIM DE JOGO
			if (vidas > 3) {
				window.location.href =  'fim_de_jogo.html'
			} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
			}
		}
	

			
	var posicaoX = Math.floor(Math.random() * largura)	- 90
	var posicaoY = Math.floor(Math.random() * altura)	- 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY


		console.log(posicaoY, posicaoX)

// Criar o elemento HTML	
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

//	Posicionar o elemento nas cordenadas geradas de forma randomica 
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function () {
		this.remove()
	}

	document.body.appendChild(mosquito)

	}

//Criar tamanhos aleatórios para os mosquitos
	function tamanhoAleatorio () {
		var classe = Math.floor(Math.random() * 3)
		
		switch(classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'
		
		case 2 :
			return 'mosquito3'	

		}
	}

	function ladoAleatorio() {
		var classe = Math.floor(Math.random() * 2)
		
		switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
		
	}
}