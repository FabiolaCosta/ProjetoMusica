let musicasPag = [
    {titulo:'O Show Tem Que Continuar', artista:"Grupo Fundo de Quintal", src:"music/Fundo de Quintal - O Show Tem Que Continuar.mp3", img:"img/fundodequintal.jpg"},
    {titulo:'Brilho de Cristal', artista:"Pixote", src:"music/Pixote - Brilho de cristal.mp3", img:"img/pixote.jpg"},
    {titulo:'Até que Durou', artista:"Péricles", src:"music/PÉRICLES - ATÉ QUE DUROU (AO VIVO) - VÍDEO OFICIAL.mp3", img:"img/pericles.jpg"},
    {titulo:'É Natural', artista:"Ferrugem", src:"music/DVD PRAZER, EU SOU FERRUGEM_ _É NATURAL_ I PART. BRUNO CARDOSO.mp3", img:"img/ferrugem.jpg"},
    {titulo:'Sinais', artista:"Sorriso Maroto", src:"music/Sorriso Maroto - Sinais (Ao Vivo No Recife).mp3", img:"img/sorriso.jpg"},
    {titulo:'Meu Lugar', artista:"Arlindo Cruz", src:"music/Arlindo Cruz - Meu Lugar.mp3", img:"img/arlindocruz.jpg"}
];

let indexPag = 0;
let mPag = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.capa');
let nomeMusica = document.querySelector('.dtl h3');
let nomeArtista = document.querySelector('.dtl p');


renderizarMusica(indexPag);

//Eventos
document.querySelector('.btnPlay').addEventListener('click', tocarMusica);
document.querySelector('.btnPause').addEventListener('click', pausarMusica);
mPag.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexPag--;
    if(indexPag<0){
        indexPag = 9;
    }
    renderizarMusica(indexPag);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexPag++;
    if(indexPag>9){
        indexPag = 0;
    }
    renderizarMusica(indexPag);
    tocarMusica();
});

document.querySelector('.lista-faixa').addEventListener('click', () =>{
    let verFaixa = document.querySelector('.faixas');
    verFaixa.classList.toggle('hide');
});

let isRandom = false;
document.querySelector('.repetir-faixa').addEventListener('click', () =>{
    let repeat_index = indexPag;
    renderizarMusica(repeat_index);
    tocarMusica();
});


document.querySelector('.mic1').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica');
    verLetra.classList.toggle('hide');
});

document.querySelector('.mic2').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica2');
    verLetra.classList.toggle('hide');
});

document.querySelector('.mic3').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica3');
    verLetra.classList.toggle('hide');
});

document.querySelector('.mic4').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica4');
    verLetra.classList.toggle('hide');
});

document.querySelector('.mic5').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica5');
    verLetra.classList.toggle('hide');
});

document.querySelector('.mic6').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica6');
    verLetra.classList.toggle('hide');
});



//Funções para abrir dados no navegador
function renderizarMusica(index){
    mPag.setAttribute('src', musicasPag[index].src);
    mPag.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasPag[index].titulo;
        nomeArtista.textContent = musicasPag[index].artista;
        imagem.src = musicasPag[index].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mPag.duration));
    });
}

function tocarMusica(){
    mPag.play();
    imagem.classList.add('rotate');
    document.querySelector('.btnPause').style.display = "block";
    document.querySelector('.btnPlay').style.display = "none";
}

function pausarMusica(){
    mPag.pause();
    imagem.classList.remove('rotate');
    document.querySelector('.btnPause').style.display = "none";
    document.querySelector('.btnPlay').style.display = "block";
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((mPag.currentTime / mPag.duration)*100) + "%";
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosMinutos(Math.floor(mPag.currentTime));
}

function segundosMinutos(segundos){
    let cpMinutos = Math.floor(segundos/60);
    let cpSegundos = segundos % 60;
    if(cpSegundos < 10){
        cpSegundos = "0" + cpSegundos
    }
    return cpMinutos+':'+cpSegundos;
}

//Função carregar a música na faixa
function musicpag1(){
    mPag.setAttribute('src', musicasPag[0].src);
    mPag.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasPag[0].titulo;
        nomeArtista.textContent = musicasPag[0].artista;
        imagem.src = musicasPag[0].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mPag.duration));
    });
    tocarMusica();
}

function musicpag2(){
    mPag.setAttribute('src', musicasPag[1].src);
    mPag.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasPag[1].titulo;
        nomeArtista.textContent = musicasPag[1].artista;
        imagem.src = musicasPag[1].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mPag.duration));
    });
    tocarMusica();
}

function musicpag3(){
    mPag.setAttribute('src', musicasPag[2].src);
    mPag.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasPag[2].titulo;
        nomeArtista.textContent = musicasPag[2].artista;
        imagem.src = musicasPag[2].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mPag.duration));
    });
    tocarMusica();
}

function musicpag4(){
    mPag.setAttribute('src', musicasPag[3].src);
    mPag.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasPag[3].titulo;
        nomeArtista.textContent = musicasPag[3].artista;
        imagem.src = musicasPag[3].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mPag.duration));
    });
    tocarMusica();
}

function musicpag5(){
    mPag.setAttribute('src', musicasPag[4].src);
    mPag.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasPag[4].titulo;
        nomeArtista.textContent = musicasPag[4].artista;
        imagem.src = musicasPag[4].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mPag.duration));
    });
    tocarMusica();
}

function musicpag6(){
    mPag.setAttribute('src', musicasPag[5].src);
    mPag.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasPag[5].titulo;
        nomeArtista.textContent = musicasPag[5].artista;
        imagem.src = musicasPag[5].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mPag.duration));
    });
    tocarMusica();
}
