function tocaSom (seletorAudio) {
    document.querySelector(seletorAudio).play();
    if(elemento = null && elemento.localName === 'audio'){
        elemento.play();
    }else {
        console.log('Elemento não encontrado ou Seletor Inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Espaço' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (evento) {
        if (evento.code === 'Espaço' || evento.code === 'Enter') {
            tecla.classList.remove('ativa');
        }
    }

}
