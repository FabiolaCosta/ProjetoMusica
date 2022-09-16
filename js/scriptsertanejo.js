let musicasSet = [
    {titulo:'A Maior Saudade', artista:"Henrique & Juliano", src:"music/Henrique e Juliano -  A MAIOR SAUDADE - DVD Manifesto Musical.mp3", img:"img/hj.png"},
    {titulo:'Todo Mundo Vai Sofrer', artista:"Marília Mendonça", src:"music/Marília Mendonça - TODO MUNDO VAI SOFRER (Todos Os Cantos).mp3", img:"img/marilia.jpg"},
    {titulo:'Cheirosa', artista:"Jorge & Mateus", src:"music/Jorge _ Mateus - CHEIROSA (Vídeo Oficial).mp3", img:"img/cheirosa.jpg"},
    {titulo:'Notificação Preferida', artista:"Zé Neto & Cristiano", src:"music/Zé Neto e Cristiano - NOTIFICAÇÃO PREFERIDA - _EsqueceOMundoLaFora.mp3", img:"img/zeneto.jpg"},
    {titulo:'A Rosa e o Beija-Flor', artista:"Matheus & Kauan", src:"music/MatheusKauanARosaEOBeija-Flor.mp3", img:"img/arosa.jpg"},
    {titulo:'Bloqueado', artista:"Gusttavo Lima", src:"music/Bloqueado (Ao Vivo).mp3", img:"img/gusttavo.jpg"}
];

let indexSet = 0;
let mSet = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.capa');
let nomeMusica = document.querySelector('.dtl h3');
let nomeArtista = document.querySelector('.dtl p');


renderizarMusica(indexSet);

//Eventos
document.querySelector('.btnPlay').addEventListener('click', tocarMusica);
document.querySelector('.btnPause').addEventListener('click', pausarMusica);
mSet.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexSet--;
    if(indexSet<0){
        indexSet = 9;
    }
    renderizarMusica(indexSet);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexSet++;
    if(indexSet>9){
        indexSet = 0;
    }
    renderizarMusica(indexSet);
    tocarMusica();
});

document.querySelector('.lista-faixa').addEventListener('click', () =>{
    let verFaixa = document.querySelector('.faixas');
    verFaixa.classList.toggle('hide');
});

let isRandom = false;
document.querySelector('.repetir-faixa').addEventListener('click', () =>{
    let repeat_index = indexSet;
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
    mSet.setAttribute('src', musicasSet[index].src);
    mSet.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasSet[index].titulo;
        nomeArtista.textContent = musicasSet[index].artista;
        imagem.src = musicasSet[index].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mSet.duration));
    });
}

function tocarMusica(){
    mSet.play();
    imagem.classList.add('rotate');
    document.querySelector('.btnPause').style.display = "block";
    document.querySelector('.btnPlay').style.display = "none";
}

function pausarMusica(){
    mSet.pause();
    imagem.classList.remove('rotate');
    document.querySelector('.btnPause').style.display = "none";
    document.querySelector('.btnPlay').style.display = "block";
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((mSet.currentTime / mSet.duration)*100) + "%";
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosMinutos(Math.floor(mSet.currentTime));
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
function musicset1(){
    mSet.setAttribute('src', musicasSet[0].src);
    mSet.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasSet[0].titulo;
        nomeArtista.textContent = musicasSet[0].artista;
        imagem.src = musicasSet[0].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mSet.duration));
    });
    tocarMusica();
}

function musicset2(){
    mSet.setAttribute('src', musicasSet[1].src);
    mSet.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasSet[1].titulo;
        nomeArtista.textContent = musicasSet[1].artista;
        imagem.src = musicasSet[1].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mSet.duration));
    });
    tocarMusica();
}

function musicset3(){
    mSet.setAttribute('src', musicasSet[2].src);
    mSet.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasSet[2].titulo;
        nomeArtista.textContent = musicasSet[2].artista;
        imagem.src = musicasSet[2].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mSet.duration));
    });
    tocarMusica();
}

function musicset4(){
    mSet.setAttribute('src', musicasSet[3].src);
    mSet.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasSet[3].titulo;
        nomeArtista.textContent = musicasSet[3].artista;
        imagem.src = musicasSet[3].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mSet.duration));
    });
    tocarMusica();
}

function musicset5(){
    mSet.setAttribute('src', musicasSet[4].src);
    mSet.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasSet[4].titulo;
        nomeArtista.textContent = musicasSet[4].artista;
        imagem.src = musicasSet[4].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mSet.duration));
    });
    tocarMusica();
}

function musicset6(){
    mSet.setAttribute('src', musicasSet[5].src);
    mSet.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasSet[5].titulo;
        nomeArtista.textContent = musicasSet[5].artista;
        imagem.src = musicasSet[5].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mSet.duration));
    });
    tocarMusica();
}
