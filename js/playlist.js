let musicasFav = [
    {titulo:'Sweater Weather', artista:"The Neighbourhood", src:"music/Sweater Weather.mp3", img:"img/sweater.png"},
    {titulo:'Dont you worry child', artista:"Swedish House Mafia", src:"music/Don't You Worry Child (Radio Edit).mp3", img:"img/dontyouworrychild.jpg"},
    {titulo:'Tá Escrito', artista:"Grupo Revelação", src:"music/Grupo Revelação - Tá Escrito (Ao Vivo no Morro).mp3", img:"img/taescrito.jpg"},
    {titulo:'Lud Session feat. Gloria Groove', artista:"Ludmilla", src:"music/Numanice Lud Session feat. Gloria Groove (Live).mp3", img:"img/numanice.png"},
    {titulo:'The Scientist', artista:"Coldplay", src:"music/Coldplay - The Scientist (Official Video).mp3", img:"img/thescientist.png"},
    {titulo:'Im an Albatraoz', artista:"Aron Chupa", src:"music/AronChupa, Little Sis Nora - I'm an Albatraoz _ OFFICIAL VIDEO.mp3", img:"img/Im-an-Albatraoz.jpg"},
    {titulo:'Stressed Out', artista:"Twenty One Pilots", src:"music/twenty one pilots - Stressed Out (Audio).mp3", img:"img/twentyonepilots.jpg"},
    {titulo:'Muleque de Vila', artista:"Projota", src:"music/Projota - Muleque De Vila (Ao Vivo).mp3", img:"img/mulequedevila.png"},
    {titulo:'Gratidão', artista:"L7nnon", src:"music/15. L7NNON - GRATIDÃO _ HHR.mp3", img:"img/gratidao.png"},
    {titulo:'Velha Infância', artista:"Tribalistas", src:"music/Velha Infância (2004 Digital Remaster).mp3", img:"img/velhainfancia.jpg"}
];

let indexFav = 0;
let mFav = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.capa');
let nomeMusica = document.querySelector('.descricao h3');
let nomeArtista = document.querySelector('.descricao p');
let tocandoAgora = document.querySelector('.tocandoAgora');


renderizarMusica(indexFav);

//Eventos
document.querySelector('.btnPlay').addEventListener('click', tocarMusica);
document.querySelector('.btnPause').addEventListener('click', pausarMusica);
mFav.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexFav--;
    if(indexFav<0){
        indexFav = 9;
    }
    renderizarMusica(indexFav);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexFav++;
    if(indexFav>9){
        indexFav = 0;
    }
    renderizarMusica(indexFav);
    tocarMusica();
});

document.querySelector('.lista-faixa').addEventListener('click', () =>{
    let verFaixa = document.querySelector('.faixas');
    verFaixa.classList.toggle('hide');
});

let isRandom = false;
document.querySelector('.repetir-faixa').addEventListener('click', () =>{
    let repeat_index = indexFav;
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

document.querySelector('.mic7').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica7');
    verLetra.classList.toggle('hide');
});

document.querySelector('.mic8').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica8');
    verLetra.classList.toggle('hide');
});

document.querySelector('.mic9').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica9');
    verLetra.classList.toggle('hide');
});

document.querySelector('.mic10').addEventListener('click', () => {
    let verLetra = document.querySelector('.letraMusica10');
    verLetra.classList.toggle('hide');
});


//Funções para abrir dados no navegador
function renderizarMusica(index){
    mFav.setAttribute('src', musicasFav[index].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[index].titulo;
        nomeArtista.textContent = musicasFav[index].artista;
        imagem.src = musicasFav[index].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música " + (index + 1) + " de " + musicasFav.length;
    });
}

function tocarMusica(){
    mFav.play();
    imagem.classList.add('rotate');
    document.querySelector('.btnPause').style.display = "block";
    document.querySelector('.btnPlay').style.display = "none";
}

function pausarMusica(){
    mFav.pause();
    imagem.classList.remove('rotate');
    document.querySelector('.btnPause').style.display = "none";
    document.querySelector('.btnPlay').style.display = "block";
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((mFav.currentTime / mFav.duration)*100) + "%";
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosMinutos(Math.floor(mFav.currentTime));
}

function segundosMinutos(segundos){
    let cpMinutos = Math.floor(segundos/60);
    let cpSegundos = segundos % 60;
    if(cpSegundos < 10){
        cpSegundos = "0" + cpSegundos
    }
    return cpMinutos+':'+cpSegundos;
}


function musictop1(){
    mFav.setAttribute('src', musicasFav[0].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[0].titulo;
        nomeArtista.textContent = musicasFav[0].artista;
        imagem.src = musicasFav[0].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 1" + " de " + musicasFav.length;
    });
    tocarMusica();
}

function musictop2(){
    mFav.setAttribute('src', musicasFav[1].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[1].titulo;
        nomeArtista.textContent = musicasFav[1].artista;
        imagem.src = musicasFav[1].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 2" + " de " + musicasFav.length;
    });
    tocarMusica();
}

function musictop3(){
    mFav.setAttribute('src', musicasFav[2].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[2].titulo;
        nomeArtista.textContent = musicasFav[2].artista;
        imagem.src = musicasFav[2].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 3" + " de " + musicasFav.length;
    });
    tocarMusica();
}

function musictop4(){
    mFav.setAttribute('src', musicasFav[3].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[3].titulo;
        nomeArtista.textContent = musicasFav[3].artista;
        imagem.src = musicasFav[3].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 4" + " de " + musicasFav.length;
    });
    tocarMusica();
}

function musictop5(){
    mFav.setAttribute('src', musicasFav[4].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[4].titulo;
        nomeArtista.textContent = musicasFav[4].artista;
        imagem.src = musicasFav[4].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 5" + " de " + musicasFav.length;
    });
    tocarMusica();
}

function musictop6(){
    mFav.setAttribute('src', musicasFav[5].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[5].titulo;
        nomeArtista.textContent = musicasFav[5].artista;
        imagem.src = musicasFav[5].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 6" + " de " + musicasFav.length;
    });
    tocarMusica();
}

function musictop7(){
    mFav.setAttribute('src', musicasFav[6].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[6].titulo;
        nomeArtista.textContent = musicasFav[6].artista;
        imagem.src = musicasFav[6].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 7" + " de " + musicasFav.length;
    });
    tocarMusica();
}

function musictop8(){
    mFav.setAttribute('src', musicasFav[7].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[7].titulo;
        nomeArtista.textContent = musicasFav[7].artista;
        imagem.src = musicasFav[7].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 8" + " de " + musicasFav.length;
    });
    tocarMusica();
}

function musictop9(){
    mFav.setAttribute('src', musicasFav[8].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[8].titulo;
        nomeArtista.textContent = musicasFav[8].artista;
        imagem.src = musicasFav[8].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 9" + " de " + musicasFav.length;
    });
    tocarMusica();
}

function musictop10(){
    mFav.setAttribute('src', musicasFav[9].src);
    mFav.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicasFav[9].titulo;
        nomeArtista.textContent = musicasFav[9].artista;
        imagem.src = musicasFav[9].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(mFav.duration));
        tocandoAgora.textContent = "Tocando música 10" + " de " + musicasFav.length;
    });
    tocarMusica();
}




