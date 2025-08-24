const regresaTrue=() => {
    console.log('Regresa true');
    return true;
}

const regresaFalse=() => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true); //true
console.log(!true); //false



console.warn('And'); //true si todos los valores son true 
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false


console.log('==========');
console.log(regresaFalse() && regresaTrue()); //false

console.warn('Or'); //true si alguno de los valores es true
console.log(true || false); //true
console.log(false || false); //false


console.log(regresaTrue()|| regresaFalse()); //true
console.log('==========');
console.log('4 condiciones', true && true && true && false); //false

console.warn('Asignaciones');

const soyUndefined= undefined;
const soyNull= null;
const soyFalse= false;

const a1= false && 'Hola Mundo' && 50;
const a2= 'Hola' && 'Mundo' && soyFalse && true;
const a3= soyFalse || 'Ya no soy false' ;
const a4= soyFalse || soyUndefined || soyNull || 'Ya no soy false de nuevo' || true;


console.log({a1,a2,a3,a4});

