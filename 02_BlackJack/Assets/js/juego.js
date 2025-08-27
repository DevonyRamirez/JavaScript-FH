//funcion anonima
(()=>{


    let deck=[];
    const   tipos=['C','D','H','S'], 
            especiales=['A','J','Q','K'];

    let puntosJugadores=[];

    //referencias del HTML
    const   btnPedir=document.querySelector('#btnPedir'),
            btnDetener=document.querySelector('#btnDetener'),
            btnNuevo=document.querySelector('#btnNuevo');


    const divCartasJugadores=document.querySelectorAll('.divCartas'),
            puntosHTML=document.querySelectorAll('small');


    const inicializarJuego=(numJugadores=1)=>{
        deck=crearDeck();

        puntosJugadores=[];
        for(let i=0;i<numJugadores;i++){
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(elem=>elem.innerText=0);
        divCartasJugadores.forEach(elem=>elem.innerHTML=0)


    }
    //funcion para crear el deck

    const crearDeck=()=>{

        deck=[];

        for (let i=2; i<=10;i++){
            for(let tipo of tipos){
                deck.push(i+tipo);
            }
        }

        for (let tipo of tipos){
            for (let esp of especiales){
                deck.push(esp+tipo);
            }
        }
        
        
        return _.shuffle(deck);
    }


    //pedir carta
    const pedirCarta=()=>{
        if (deck.length===0){
            throw 'No hay cartas en el deck';
        }
        //toma la ultima carta
        return deck.pop();;
    }

    const valorCarta=(carta)=>{
        const valor=carta.substring(0,carta.length-1);

        return (isNaN(valor))?
            (valor==='A')?11:10
            :valor*1;
    }

    const acumularPuntos=(turno)=>{
            puntosJugadores[turno]=puntosJugadores[turno]+valorCarta(carta);
            puntosHTML[turno].innerText=puntosJugadores[turno];

            return puntosJugadores[turno];
    }

    const crearCarta=(carta, turno)=>{
        const imgCarta=document.createElement('img');
        imgCarta.src=`assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador=()=>{
        const[ puntosminimos, puntosComputadora]=puntosJugadores;
        setTimeout(()=>{
            if(puntosComputadora===puntosminimos){
                alert('Nadie Gana :')
            }else if(puntosminimos>21){
                alert('Computadora Gana');
            }else if(puntosComputadora>21){
                alert('Jugador Gana')
            }else{
                alert('Computadora Gana')
            }
        }, 1 );
    }

    // turno de la computadora
    const turnoComputadora=(puntosminimos)=>{
        let puntosComputadora=0;
        do{
            const carta=pedirCarta();
            puntosComputadora=acumularPuntos(carta,puntosJugadores.length-1)

            crearCarta(carta,puntosJugadores.length-1);

        }while((puntosComputadora<puntosminimos) &&(puntosminimos<=21))
        
        determinarGanador();
    }

    //eventos
    btnPedir.addEventListener('click',()=>{

        const carta=pedirCarta();
        const puntosJugador=acumularPuntos(carta,0);

        crearCarta(carta,0);


        if(puntosJugador>21){
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled=true;//bloque el boton
            btnDetener.disabled=true;
            turnoComputadora(puntosjugador);
        } else if(puntosJugador===21){
            console.warn('21, genial!');
            btnPedir.disabled=true;//bloque el boton
            btnDetener.disabled=true;

            turnoComputadora(puntosjugador);
        }
        
    })

    btnDetener.addEventListener('click',()=>{
        btnDetener.disabled=true;
        btnPedir.disabled=true;
        turnoComputadora(puntosJugadores[0]);
    })

    // btnNuevo.addEventListener('click',()=>{
    //     inicializarJuego();

    // })

    return {
        nuevoJuego:inicializarJuego
    }


})();










