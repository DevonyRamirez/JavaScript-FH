

/**
 * @param {Array<string>} deck ej:[2D,5C,...]
 * @returns {String} retorna una carta del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}