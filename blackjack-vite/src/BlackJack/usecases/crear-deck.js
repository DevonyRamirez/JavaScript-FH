import _ from 'underscore';
//exportacion independiente


/**
 * 
 * @param {Array<string>} tiposDeCarta  ej:['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ej: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo arreglo de cartas
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    if (!tiposDeCarta) throw new Error('TiposDeCarta es obligatoria')
    if (tiposDeCarta>0) throw new Error('TiposDeCarta tiene que ser un arreglo de string')


    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}


