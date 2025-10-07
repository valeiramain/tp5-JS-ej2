class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNac
    constructor(nombre, edad, dni, sexo, peso, altura, anioNac) {
        this.#nombre = nombre,
            this.#edad = edad,
            this.#dni = dni,
            this.#sexo = sexo,
            this.#peso = peso,
            this.#altura = altura,
            this.#anioNac = anioNac
    }

    // Getters
    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get dni() {
        return this.#dni;
    }

    get sexo() {
        return this.#sexo;
    }

    get peso() {
        return this.#peso;
    }

    get altura() {
        return this.#altura;
    }

    get anioNac() {
        return this.#anioNac;
    }

    // Setters
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    set edad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }

    set dni(nuevoDni) {
        this.#dni = nuevoDni;
    }

    set sexo(nuevoSexo) {
        this.#sexo = nuevoSexo;
    }

    set peso(nuevoPeso) {
        this.#peso = nuevoPeso;
    }

    set altura(nuevaAltura) {
        this.#altura = nuevaAltura;
    }

    set anioNac(nuevoAnio) {
        this.#anioNac = nuevoAnio;
    }

    // metodos

    mostrarGeneracion() {
        let generacion = ''
        let rasgo = ''
        if (this.#anioNac >= 1994 && this.#anioNac <= 2010) {
            generacion = 'Generación Z'
            rasgo = 'Irreverencia'
        }

        if (this.#anioNac >= 1981 && this.#anioNac <= 1993) {
            generacion = 'Generación Y'
            rasgo = 'Frustración'
        }

        if (this.#anioNac >= 1969 && this.#anioNac <= 1980) {
            generacion = 'Generación X'
            rasgo = 'Obsesión al éxito'
        }
        if (this.#anioNac >= 1949 && this.#anioNac <= 1968) {
            generacion = 'Baby Boomer'
            rasgo = 'Ambición'
        }
        if (this.#anioNac >= 1930 && this.#anioNac <= 1948) {
            generacion = 'Silent Generation (Los niños de la postguerra)'
            rasgo = 'Austeridad'
        }

        if (generacion!=='' && rasgo !==''){
            document.writeln(`<p>El Año de nacimiento: ${this.#anioNac}, pertenece a la generación: "${generacion}" y su rasgo característico es: "${rasgo}" </p>`)
        } 

    }

    esMayorDeEdad() {
        if (this.#edad >= 18) {
            document.writeln(`<p>La persona es mayor de edad</p>`)
        } else {
            document.writeln(`<p>La persona NO es mayor de edad</p>`)
        }
    }

    mostrarDatos() {
        document.writeln(`<h5>Datos de la Persona</h5>`)
        document.writeln(`<ul>
            <li><p>Nombre: ${this.#nombre}</p></li>
            <li><p>Edad: ${this.#edad}</p></li>
            <li><p>DNI: ${this.#dni}</p></li>
            <li><p>Sexo: ${this.#sexo}</p></li>
            <li><p>Peso: ${this.#peso}</p></li>
            <li><p>Altura: ${this.#altura}</p></li>
            <li><p>Año de Nacimiento: ${this.#anioNac}</p></li>
            </ul>`)
    }

    generarDNI() {
        // Número aleatorio de 8 cifras
        let numeroAleatorio = Math.floor(10000000 + Math.random() * 90000000);
        console.log(numeroAleatorio);
        this.#dni = numeroAleatorio;
        document.writeln(`<p>Nuevo DNI: ${this.dni}</p>`)
    }
}

const persona1 = new Persona('Valentina Iramain', 53, '22414369', 'M', 53, 160, 1972)
persona1.mostrarGeneracion()
persona1.esMayorDeEdad()
persona1.generarDNI()
console.log(persona1)