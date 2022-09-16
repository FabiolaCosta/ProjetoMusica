let musicaPop = [
    {titulo:'7 Rings', artista:"Ariana Grande", src:"music/Ariana Grande - 7 rings (Official Video).mp3", img:"img/ariana.png"},
    {titulo:'Formation', artista:"Beyoncé", src:"music/Beyoncé - Formation (Official Video).mp3", img:"img/beyonce.png"},
    {titulo:'Umbrella', artista:"Rihanna", src:"music/Rihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z.mp3", img:"img/rihannaumbrella.jpg"},
    {titulo:'Animals', artista:"Maroon 5", src:"music/Maroon 5 - Animals (Lyric Video).mp3", img:"img/maroon5.jpg"},
    {titulo:'New Rules', artista:"Dua Lipa", src:"music/Dua Lipa - New Rules (Official Music Video).mp3", img:"img/duaLipa.jpg"},   
    {titulo:'As it was', artista:"Harry Styles", src:"music/Harry Styles - As It Was (Audio).mp3", img:"img/harryStyles.png"}
];

let indexPop = 0;
let mpop = document.querySelector('.audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.capa');
let nomeMusica = document.querySelector('.dtl h3');
let nomeArtista = document.querySelector('.dtl p');

musicPop(indexPop);

//Eventos
document.querySelector('.btnPlay').addEventListener('click', tocarMusica);
document.querySelector('.btnPause').addEventListener('click', pausarMusica);
mpop.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexPop--;
    if(indexPop<0){
        indexPop = 9;
    }
    musicPop(indexPop);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexPop++;
    if(indexPop>9){
        indexPop = 0;
    }
    musicPop(indexPop);
    tocarMusica();
});

document.querySelector('.lista-faixa').addEventListener('click', () =>{
    let verFaixa = document.querySelector('.faixas');
    verFaixa.classList.toggle('hide');
});
let isRandom = false;
document.querySelector('.repetir-faixa').addEventListener('click', () =>{
    let repeat_index = indexPop;
    musicPop(repeat_index);
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



//Funções para abrir os dados no navegador
function musicPop(indexPop){
    mpop.setAttribute('src', musicaPop[indexPop].src);
    mpop.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicaPop[indexPop].titulo;
        nomeArtista.textContent = musicaPop[indexPop].artista;
        imagem.src = musicaPop[indexPop].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mpop.duration));
    });
}

function musicpop1(){
    mpop.setAttribute('src', musicaPop[0].src);
    mpop.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicaPop[0].titulo;
        nomeArtista.textContent = musicaPop[0].artista;
        imagem.src = musicaPop[0].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mpop.duration));
    });
    tocarMusica();
}

function musicpop2(){
    mpop.setAttribute('src', musicaPop[1].src);
    mpop.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicaPop[1].titulo;
        nomeArtista.textContent = musicaPop[1].artista;
        imagem.src = musicaPop[1].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mpop.duration));
    });
    tocarMusica();
}

function musicpop3(){
    mpop.setAttribute('src', musicaPop[2].src);
    mpop.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicaPop[2].titulo;
        nomeArtista.textContent = musicaPop[2].artista;
        imagem.src = musicaPop[2].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mpop.duration));
    });
    tocarMusica();
}

function musicpop4(){
    mpop.setAttribute('src', musicaPop[3].src);
    mpop.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicaPop[3].titulo;
        nomeArtista.textContent = musicaPop[3].artista;
        imagem.src = musicaPop[3].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mpop.duration));
    });
    tocarMusica();
}

function musicpop5(){
    mpop.setAttribute('src', musicaPop[4].src);
    mpop.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicaPop[4].titulo;
        nomeArtista.textContent = musicaPop[4].artista;
        imagem.src = musicaPop[4].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mpop.duration));
    });
    tocarMusica();
}

function musicpop6(){
    mpop.setAttribute('src', musicaPop[5].src);
    mpop.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicaPop[5].titulo;
        nomeArtista.textContent = musicaPop[5].artista;
        imagem.src = musicaPop[5].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mpop.duration));
    });
    tocarMusica();
}

function tocarMusica(){
    mpop.play();
    imagem.classList.add('rotate');
    document.querySelector('.btnPause').style.display = "block";
    document.querySelector('.btnPlay').style.display = "none";
}

function pausarMusica(){
    mpop.pause();
    imagem.classList.remove('rotate');
    document.querySelector('.btnPause').style.display = "none";
    document.querySelector('.btnPlay').style.display = "block";
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((mpop.currentTime / mpop.duration)*100) + "%";
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosMinutos(Math.floor(mpop.currentTime));
}

function segundosMinutos(segundos){
    let cpMinutos = Math.floor(segundos/60);
    let cpSegundos = segundos % 60;
    if(cpSegundos < 10){
        cpSegundos = "0" + cpSegundos
    }
    return cpMinutos+':'+cpSegundos;
}



