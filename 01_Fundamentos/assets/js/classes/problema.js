function Persona(nombre,edad){ //funcion paara crear instancias
    console.log('se ejecuto esta linea');
    this.nombre=nombre;
    this.edad=edad;

    this.imprimir=function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

const maria= new Persona('Maria',18) //nueva instacia de persona
maria.imprimir()