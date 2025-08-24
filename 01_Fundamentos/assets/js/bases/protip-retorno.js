// function crearPersona(nombre,apellido){
//     return{
//         nombre,
//         apellido
//     }
// }

const crearPersona=(nombre,apellido)=>({nombre,apellido});//si es una sola linea no es necesario el return ni las llaves
//entre los parentesis para hacer objeto 

const persona=crearPersona('Devony','Ramirez');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2=(edad,...arguments)=>{
    return arguments;
}

const [casado, vivo , nombre ,saludo]=imprimeArgumentos2(10,true,false,'Devony', 'Ramirez');
console.log({casado, vivo , nombre ,saludo});
//({}) es para ver como pares en la consola

const {apellido: nuevoApellido}=crearPersona('Devony','Ramirez');
console.log({nuevoApellido});


let tony={
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    // edad:40,
    trajes:['Mark I','Mark V','Hulkbuster'],
}
// const imprimePropiedades=(personaje)=>{
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }   

const imprimePropiedades=({nombre, codeName,vivo,edad=15,trajes})=> //si no viene edad se le asigna 0
    console.log({nombre, codeName ,vivo,edad,trajes});


imprimePropiedades(tony); //si las propiedades son las mismas no es necesario poner nombre:nombre