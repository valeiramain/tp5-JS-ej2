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
        rasgo = '';
        generacion = '';
        let textoAlertGeneracion = document.getElementById('alertGeneracion')

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
        if (this.#anioNac < 1930) {
            generacion = 'No tiene definida Generación'
            rasgo = 'No tiene definido Rasgo'
        }

        if (generacion !== '' && rasgo !== '') {
            if (fondoResultados) fondoResultados.classList.remove('d-none')
            textoAlertGeneracion.classList.remove('d-none')
            textoAlertGeneracion.textContent = `Generación: "${generacion}" - Rasgo Característico: "${rasgo}"`
        }
    }


    esMayorDeEdad() {
        let textoAlertEsMayor = document.getElementById('alertMayorEdad')

        textoAlertEsMayor.classList.remove('d-none')
        if (fondoResultados) fondoResultados.classList.remove('d-none')
        if (this.#edad >= 18) {
            textoAlertEsMayor.textContent = 'La persona es Mayor de edad.'
        } else {
            textoAlertEsMayor.textContent = 'La persona NO es Mayor de edad.'
        }
    }

    mostrarDatos() {
        let textoAlertMostrarDatos = document.getElementById('AlertMostrarDatos')

        textoAlertMostrarDatos.classList.remove('d-none')
        if (fondoResultados) fondoResultados.classList.remove('d-none')

        textoAlertMostrarDatos.textContent = `Nombre: ${this.#nombre} - Edad: ${this.#edad} - DNI: ${this.#dni} - Sexo: ${this.#sexo} - Peso: ${this.#peso} - Altura: ${this.#altura} - Año de Nacimiento: ${this.#anioNac}`
    }
}


function crearPersona(e) {
    e.preventDefault();
    console.log('en crear persona')

    const nombre = document.getElementById('nombreYApellido').value
    const edad = document.getElementById('edad').value
    const dni = document.getElementById('dni').value
    const sexo = document.getElementById('sexo').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const anioNac = document.getElementById('anioNac').value

    nuevaPersona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNac)
    console.log(nuevaPersona)
    // habilitar botones ahora que ya hay objeto
    setBotonesEnabled(true);
}

// función auxiliar para habilitar/deshabilitar botones
function setBotonesEnabled(enabled) {
    if (btnGeneracion) btnGeneracion.disabled = !enabled;
    if (btnMayorEdad) btnMayorEdad.disabled = !enabled;
    if (btnMostrarDatos) btnMostrarDatos.disabled = !enabled;
}

// ************* DOM y lógica de UI *************** //

// Cuando presiona boton Enviar
const formulario = document.querySelector('form')
console.log(formulario)


const btnGeneracion = document.getElementById('btnGeneracion');
const btnMayorEdad = document.getElementById('btnMayorEdad');
const btnMostrarDatos = document.getElementById('btnMostrarDatos');
const fondoResultados = document.getElementById('resultados');
if (fondoResultados) fondoResultados.classList.toggle('d-none')

// al inicio deshabilitamos los botones hasta crear la persona
setBotonesEnabled(false);

//crea objeto persona
let nuevaPersona = null
formulario.addEventListener('submit', crearPersona)

let generacion = ''
let rasgo = ''

// eventos de botones
btnGeneracion.addEventListener('click', () => {
    if (nuevaPersona) {
        nuevaPersona.mostrarGeneracion()
    }
});

btnMayorEdad.addEventListener('click', () => {
    if (nuevaPersona) {
        nuevaPersona.esMayorDeEdad()
    };
});
btnMostrarDatos.addEventListener('click', () => {
    if (nuevaPersona) {
        nuevaPersona.mostrarDatos();
    }
});
