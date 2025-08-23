

function saludar(nombre){
    // console.log( arguments ); // Muestra todos los argumentos que se pasan a la función
    // console.log('Hola '+ nombre);
    return [1,2,3,4];
    console.log('Soy código que no se va a ejecutar');
}

const saludar2=function(nombre){
    console.log('Hola '+ nombre);
}

const saludarFlecha=(nombre)=>{
    console.log('Hola '+ nombre);
}


const retornoDeSaludar=saludar('Devony',18,false,'Venezuela');
// saludar2('Devony');
console.log( retornoDeSaludar[0],retornoDeSaludar[1] );
// saludarFlecha('Devony');


function sumar(a,b){
    return a+b;
}

const sumar2=(a,b)=> a+b; // return implícito



function getAleatorio(){
    return Math.random();
}

const getAleatorio2= ()=> Math.random();



console.log( getAleatorio2() );
console.log( sumar2(2,2) );