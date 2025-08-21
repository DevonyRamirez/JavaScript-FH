let juegos = ['FIFA', 'Call of Duty', 'Minecraft', 'Fortnite', 'League of Legends'];
console.log('Largo',juegos.length);
let primer= juegos[0];
let ultimo = juegos[juegos.length - 1]; //para obtener el ultimo elemento
console.log((primer, ultimo));

juegos.forEach((Element, index, Array) =>{
    console.log({Element,index, Array});
});//elemento, indice, arr

let nuevaLongitud=juegos.push('Valorant');  //agregar al final
console.log({nuevaLongitud, juegos} );

nuevaLongitud=juegos.unshift('Counter Strike'); //agregar al inicio
console.log({juegos, nuevaLongitud});

let juegoborrado= juegos.pop(); //eliminar el ultimo
console.log({juegos, juegoborrado});



console.log(juegos);
let posicion=1;
juegos.splice(posicion,1 );
console.log({juegos, juegoborrado});
 //eliminar desde la posicion 1, 1 elemento

console.log(juegos);
 let fifaIndex= juegos.indexOf('Call of Duty'); //CaSeSeNsIrive
 console.log({fifaIndex});