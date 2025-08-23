

function saludar(nombre){
    console.log( arguments ); // Muestra todos los argumentos que se pasan a la función
    console.log('Hola '+ nombre);
}

const saludar2=function(nombre){
    console.log('Hola '+ nombre);
}

const saludarFlecha=(nombre)=>{
    console.log('Hola '+ nombre);
}


saludar('Devony',18,false,'Venezuela');
// saludar2('Devony');
saludarFlecha('Devony');