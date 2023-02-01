import { pedirCarta } from "./pedirCarta";
import {acumularPuntos, crearCarta,determinarGanador} from "../index"

export const turnoComputadora = (puntosMinimos,deck,puntosJugadores) => {
    let puntosComputadora = 0
    do {
        const carta = pedirCarta(deck);
      puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1);
        crearCarta(carta, puntosJugadores.length-1); ///
        // <img class="carta" src="assets/cartas/2C.png">
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador();
}