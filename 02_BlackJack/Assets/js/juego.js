let deck=[];
const tipos=['C','D','H','S'];
const especiales=['A','J','Q','K'];
let puntosjugador=0, puntoscomputadora=0;
//referencias del HTML
const btnPedir=document.querySelector('#btnPedir');
const btnDetener=document.querySelector('#btnDetener');
const btnNuevo=document.querySelector('#btnNuevo');

const puntosHTML=document.querySelectorAll('small');

const divCartasJugador=document.querySelector('#jugador-cartas');
const divCartasComputador=document.querySelector('#computadora-cartas')

//funcion para crear el deck

const crearDeck=()=>{
    for (let i=2; i<=10;i++){
        for(let tipo of tipos){
            deck.push(i+tipo);
        }
        // deck.push(i+'C')
    }

    for (let tipo of tipos){
        for (let esp of especiales){
            deck.push(esp+tipo);
        }
    }
    // console.log(deck);
    deck=_.shuffle(deck);
    return deck;
}

crearDeck();

//pedir carta
const pedirCarta=()=>{
    if (deck.length===0){
        throw 'No hay cartas en el deck';
    }
    const carta=deck.pop();//toma la ultima carta
    return carta;
}

//valor de la carta
const valorCarta=(carta)=>{
    const valor=carta.substring(0,carta.length-1);

    return (isNaN(valor))?
        (valor==='A')?11:10
        :valor*1;
}

// turno de la computadora
const turnoComputadora=(puntosminimos)=>{
    do{
        const carta=pedirCarta();
        puntoscomputadora+=valorCarta(carta);

        puntosHTML[1].innerText=puntoscomputadora;

        const imgCarta=document.createElement('img');
        imgCarta.src=`assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputador.append(imgCarta);

        if(puntosminimos>21){
            break;
        }
    }while((puntoscomputadora<puntosminimos) &&(puntosminimos<=21))
    
    setTimeout(()=>{
        if(puntoscomputadora===puntosminimos){
            alert('Nadie Gana :')
        }else if(puntosminimos>21){
            alert('Computadora Gana');
        }else if(puntoscomputadora>21){
            alert('Jugador Gana')
        }else{
            alert('Computadora Gana')
        }
    }, 1 );

}

//eventos
btnPedir.addEventListener('click',()=>{

    const carta=pedirCarta();
    puntosjugador+=valorCarta(carta);

    puntosHTML[0].innerText=puntosjugador;

    const imgCarta=document.createElement('img');
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosjugador>21){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled=true;//bloque el boton
        btnDetener.disabled=true;
        turnoComputadora(puntosjugador);
    } else if(puntosjugador===21){
        console.warn('21, genial!');
        btnPedir.disabled=true;//bloque el boton
        btnDetener.disabled=true;

        turnoComputadora(puntosjugador);
    }
    
})

btnDetener.addEventListener('click',()=>{
    btnDetener.disabled=true;
    btnPedir.disabled=true;
    turnoComputadora(puntosjugador)
})

btnNuevo.addEventListener('click',()=>{

    console.clear();
    deck=[];
    deck=crearDeck();
    
    puntosjugador=0;
    puntoscomputadora=0;
    
    puntosHTML[0],innerHTML=0;
    puntosHTML[1].innerHTML=0;

    divCartasComputador.innerHTML='';
    divCartasJugador.innerHTML='';

    btnPedir.disabled=false;
    btnDetener.disabled=false;

})