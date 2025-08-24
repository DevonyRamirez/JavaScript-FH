let a =5 ;
if (a>=10){ //undefined, null, una asignacion
    console.log("a es mayor y/o igual que 10");
}else{
    console.log("a es menor que 10");
}

// console.log("Fin del programa");

const hoy= new Date();

let dia=hoy.getDay(); //0 es domingo y sabado es 6

console.log({hoy, dia});

if (dia===0){//=== compara valor y tipo de dato
    console.log("Domingo");
}else if (dia===1){
    console.log("Lunes");
}else if (dia===2){
    console.log("Martes");
}else{
    console.log("No es domingo, ni lunes, ni martes");
}

// sin usar if else o switch, unicamente objetos
dia=3;

const diasLetras={
    0:"Domingo",
    1:"Lunes",
    2:"Martes",
    3:"Miercoles",
    4:"Jueves",
    5:"Viernes",
    6:"Sabado"
}

console.log(diasLetras[dia])
