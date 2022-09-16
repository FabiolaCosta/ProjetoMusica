let musicasElt = [
    {titulo:'Piece Of Your Heart', artista:"Meduza, Goodboys", src:"music/MEDUZA, Goodboys - Piece Of Your Heart (Visualizer).mp3", img:"img/meduza.jpg"},
    {titulo:'Play Hard', artista:"David Guetta", src:"music/David Guetta - Play Hard ft. Ne-Yo, Akon (Official Video).mp3", img:"img/davidguetta.png"},
    {titulo:'Hear Me Now', artista:"Alok, Bruno Martin feat Zeeba", src:"music/Alok, Bruno Martini feat. Zeeba - Hear Me Now (Official Music Video).mp3", img:"img/alok.jpg"},
    {titulo:'Outside', artista:"Calvin Harris ft. Ellie Goulding", src:"music/Calvin Harris - Outside _Audio_ ft. Ellie Goulding.mp3", img:"img/calvinharris.jpg"},
    {titulo:'The Business', artista:"Tiësto", src:"music/Tiesto - The Business (Official Lyric Video).mp3", img:"img/tiesto.jpg"},
    {titulo:'The Nights', artista:"Avicii", src:"music/Avicii - The Nights (Lyrics).mp3", img:"img/avicii.jpg"}
];

let indexElt = 0;
let mElt = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.capa');
let nomeMusica = document.querySelector('.dtl h3');
let nomeArtista = document.querySelector('.dtl p');


renderizarMusica(indexElt);

//Eventos
document.querySelector('.btnPlay').addEventListener('click', tocarMusica);
document.querySelector('.btnPause').addEventListener('click', pausarMusica);
mElt.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexElt--;
    if(indexElt<0){
        indexElt = 9;
    }
    renderizarMusica(indexElt);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexElt++;
    if(indexElt>9){
        indexElt = 0;
    }
    renderizarMusica(indexElt);
    tocarMusica();
});

document.querySelector('.lista-faixa').addEventListener('click', () =>{
    let verFaixa = document.querySelector('.faixas');
    verFaixa.classList.toggle('hide');
});

let isRandom = false;
document.querySelector('.repetir-faixa').addEventListener('click', () =>{
    let repeat_index = indexElt;
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
    mElt.setAttribute('src', musicasElt[index].src);
    mElt.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasElt[index].titulo;
        nomeArtista.textContent = musicasElt[index].artista;
        imagem.src = musicasElt[index].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mElt.duration));
    });
}

function tocarMusica(){
    mElt.play();
    imagem.classList.add('rotate');
    document.querySelector('.btnPause').style.display = "block";
    document.querySelector('.btnPlay').style.display = "none";
}

function pausarMusica(){
    mElt.pause();
    imagem.classList.remove('rotate');
    document.querySelector('.btnPause').style.display = "none";
    document.querySelector('.btnPlay').style.display = "block";
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((mElt.currentTime / mElt.duration)*100) + "%";
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosMinutos(Math.floor(mElt.currentTime));
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
function musicelt1(){
    mElt.setAttribute('src', musicasElt[0].src);
    mElt.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasElt[0].titulo;
        nomeArtista.textContent = musicasElt[0].artista;
        imagem.src = musicasElt[0].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mElt.duration));
    });
    tocarMusica();
}

function musicelt2(){
    mElt.setAttribute('src', musicasElt[1].src);
    mElt.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasElt[1].titulo;
        nomeArtista.textContent = musicasElt[1].artista;
        imagem.src = musicasElt[1].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mElt.duration));
    });
    tocarMusica();
}

function musicelt3(){
    mElt.setAttribute('src', musicasElt[2].src);
    mElt.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasElt[2].titulo;
        nomeArtista.textContent = musicasElt[2].artista;
        imagem.src = musicasElt[2].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mElt.duration));
    });
    tocarMusica();
}

function musicelt4(){
    mElt.setAttribute('src', musicasElt[3].src);
    mElt.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasElt[3].titulo;
        nomeArtista.textContent = musicasElt[3].artista;
        imagem.src = musicasElt[3].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mElt.duration));
    });
    tocarMusica();
}

function musicelt5(){
    mElt.setAttribute('src', musicasElt[4].src);
    mElt.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasElt[4].titulo;
        nomeArtista.textContent = musicasElt[4].artista;
        imagem.src = musicasElt[4].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mElt.duration));
    });
    tocarMusica();
}

function musicelt6(){
    mElt.setAttribute('src', musicasElt[5].src);
    mElt.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasElt[5].titulo;
        nomeArtista.textContent = musicasElt[5].artista;
        imagem.src = musicasElt[5].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mElt.duration));
    });
    tocarMusica();
}
