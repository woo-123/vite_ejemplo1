export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1)
    // evaluar si es no es  numero  isNaN
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 
                          : ( valor * 1);

}