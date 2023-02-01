import _ from 'underscore';
/**
 * @param {array<string>} tipoDeCarta
 * @param {array<string>} tiposEspeciales
 * @returns {array<string>}
 */
export const crearDeck = (tipoDeCarta, tiposEspeciales) => {
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipoDeCarta) {
            deck.push(`${i}${tipo}`);
        }
    }
    for (let tipo of tipoDeCarta) {
        for (let especial of tiposEspeciales) {
            deck.push(`${especial}${tipo}`);
        }
    }
     deck = _.shuffle(deck);
     console.log(deck);
      return  deck;
}

/// tambien se puede por exportacion por defecto ejemplo 
// export default crearDeck ; // a la ves que se puede individual 