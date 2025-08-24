const dia=1;
const horaActual=11;

let horaApertura;
let mensaje; //esta abierto o cerrado,

// if (dia===0 || dia===6){
//     console.log('es fin de semana');
//     horaApertura=9;
// }else{
//     console.log('es dia de semana');
//     horaApertura=11;
// }

horaApertura=( [0,6].includes(dia) ) ? 9 : 11; //operador ternario

mensaje=(horaActual>=horaApertura) ? 'Está abierto' : `Está cerrado  ${horaApertura} hrs`;


// if(horaActual>=horaApertura){
//     mensaje='Está abierto';
// }else{
//     mensaje=`Está cerrado   ${horaApertura} hrs`; 
// }


// if([0,6].includes(dia)){ //incluye el includes si eso existe
//     console.log('es fin de semana');
//     horaApertura=9;
// }


console.log({horaApertura, mensaje});