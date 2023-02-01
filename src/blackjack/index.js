import {crearDeck} from './usecases/crear_deck';
import {pedirCarta} from './usecases/pedirCarta';
import {valorCarta} from './usecases/valorCarta';
import {turnoComputadora} from './usecases/turnoComputadora';
// import {crearDeck as nuevoDeck} from './usecases/crear_deck'; se puede usar asi con un alias
// import {crearDeck , { mi nombre}} from './usecases/crear_deck';tamien se puede exportal el default con el individual 




  'use strict';
   let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];
  /// esta funcion crea un nuevo deck 
  const btnPedir = document.getElementById('btnPedir'),
        btnDetener = document.getElementById('btnDetener'),
        btnNuevoJuego = document.getElementById('btnNuevo');    
  const divCartasJugadores = document.querySelectorAll('.divCartas');
  let puntosJugadores = [];
  let marcador = document.querySelectorAll('small');
   
  const inicializarJuego = ( numJugadores = 2 )=>{
    deck =  crearDeck(tipos,especiales); 
    puntosJugadores = [];
    for(let i = 0; i < numJugadores ; i++){
          puntosJugadores.push(0);
    }   

    console.log({puntosJugadores});
  }

   //)


  //turno : 0 0 primer jugador y el ultimos sera la computadora
 export const acumularPuntos = ( carta, turno ) =>{
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      marcador[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno]
  }
 export const crearCarta = (carta, turno) =>{
      
      const imgCarta = document.createElement('img');
      imgCarta.src = `public/cartas/${carta}.png`; //3H, JD
      imgCarta.classList.add('cartas');
      divCartasJugadores[turno].append(imgCarta);
  }

 export const determinarGanador = () =>{
      const [puntosMinimos, puntosComputadora] = puntosJugadores;

      setTimeout(()=>{
          if(puntosComputadora === puntosMinimos){
              alert ('Nadie Gana: ');
          }else if (puntosMinimos > 21 ){
              alert ('computadora Gana');
          }else if (puntosComputadora > 21){
              alert ('jugador Gana');
          }else {
              alert ('computadora Gana');
          }
      },100) ;
  }

 

  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0);
     
      crearCarta(carta, 0);

      setTimeout(()=> {
          if (puntosJugador > 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          console.warn('computadora Gana');
          turnoComputadora(puntosJugador,deck,puntosJugadores);
      } else if (puntosJugador === 21) {
          alert ('jugador Gana')
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador,deck,puntosJugadores);
      }
      },100);
  })

  btnDetener.addEventListener('click',()=>{
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugadores[0],deck,puntosJugadores);     
  })
  ////// turno de la computadora

  btnNuevoJuego.addEventListener('click',()=>{
          console.clear();
          inicializarJuego();
          marcador.forEach(elem => elem.innerHTML = 0);
          divCartasJugadores.forEach(elem => elem.innerHTML='');
          btnDetener.disabled = false;
          btnPedir.disabled = false ;
  });