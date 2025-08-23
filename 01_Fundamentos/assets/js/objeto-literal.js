// objeto que tiene pares de valores
let personaje={
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes:['Mark I','Mark V','Hulkbuster'],
    direccion:{
        zip:'10880, 90265',
        ubicacion:'Malibu, California'
    },
    ultimaPelícula:'Infinity War'
}
console.log('Nombre ',personaje.nombre);  //forma con punto
console.log('Nombre ',personaje['nombre']); //con corchete
console.log('Edad ',personaje.edad);
console.log('Coors ',personaje.coords.lat); //agregar el arreglo
console.log('Nro de trajes ',personaje.trajes.length); //numero de trajes
console.log('Ultimo traje ',personaje.trajes[personaje.trajes.length -1]); //ultimo traje
console.log(personaje);

const x= 'vivo';
console.log('Vivo ',personaje[x]); //acceder a la propiedad vivo
console.log('Vivo ',personaje.vivo); //acceder a la propiedad vivo  
console.log('Ultima película ',personaje.ultimaPelícula); //acceder a la propiedad ultimaPelícula
