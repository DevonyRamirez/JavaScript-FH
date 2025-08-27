
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

//extends
class Heroe extends Persona{
    clan;
    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);//llama al constructor de persona
        this.clan='Los avengers';
    }
    quienSoy(){
        super.quienSoy();
        console.log(`soy ${this.nombre} y pertenezco a ${this.clan}`);
    }

}

const spiderman= new Heroe('Peter','Sipderman','NOoOoOoOOo');
console.log(spiderman);