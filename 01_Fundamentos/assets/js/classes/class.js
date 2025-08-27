

class Persona{
// propiedades Y/O atributos
    static _conteo=0; 
    static get conteo(){
        return Persona._conteo +' Instancia '
    }

    static mensaje(){
        console.log('Soy un metodo estatico')

    }
    nombre='';
    codigo='';
    frase ='';
    comida='';

    constructor(nombre='sin nombre',codigo='sin codigo',frase='sin frase'){

        this.nombre=nombre;
        this.codigo=codigo;
        this.frase=frase;
        Persona._conteo++; //contar cuantas instancias
    
    }
//establecer valor
    set setcomidaFavorita(comida){
        this.comida=comida.toUpperCase();
    }
//conseguir valor
    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }



    // metodo
    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }
    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`)
    }

}


const spiderman= new Persona('Peter','Sipderman','NOoOoOoOOo');
const ironman=new Persona('Tony stark','Ironman','yo soy ironman');
const capitanAmerica= new Persona('Steven Rogers', 'Capitan America', 'Puedo hacer esto todo el día')



console.log(spiderman);

// llamar ese metodo
spiderman.quienSoy();
spiderman.miFrase();

spiderman.setcomidaFavorita="El pide de cereza de la tia may"

console.log(spiderman.getComidaFavorita)

console.log(`Conteo estatico ${Persona._conteo}`)

console.log(Persona.conteo)

Persona.mensaje();


