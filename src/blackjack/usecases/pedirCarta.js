export const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw 'no hay cartas en el deck'

    }
    
    return deck.pop();
}