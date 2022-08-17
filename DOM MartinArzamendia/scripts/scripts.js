function sigPregunta() {
    alert("no sos tan tonto como pensaba, siguiente pregunta");
}

let puntaje = [];

class persona {
    constructor(nombre, puntos) {
        this.nombre = nombre;
        this.puntos = puntos;
    }
}
const persona1 = new persona(prompt("primero decime como te llamas no?"), 0);

//alert(`${persona1.nombre} te vamos a hacer unas preguntas y si no las sabes es porque sos re tonto`);

let debut = parseInt(prompt("¿En que año debuto NUEST?"));
while (debut != 2012) {
    alert("RESPUESTA INCORRECTA bobi");
    debut = prompt("intentelo de nuevo ");
}

sigPregunta();
puntaje.push(1);

let pregunta2 = prompt("¿Cuanto mide un perro promedio?");
if (pregunta2 >= 15 && pregunta2 <= 110) {
    alert("como vas a saber eso? no tenes vida? ajjajaja");
    puntaje.push(1);
} else {
    alert("alto tontito como no sabes? jajaja");
    pregunta2 = prompt("Cuanto mide un perro promedio?");
}

let puntajeFinal = 0;
puntaje.forEach(elemento => {
    puntajeFinal += elemento
}); 

alert(`${persona1.nombre} tenes ` + `${puntajeFinal}` + " puntos, me sorprende que hayas jugado esto para saber que tan tonto sosn jajajja")

const bienvenida = document.getElementById("bienvenida");

bienvenida.innerText = "TEST MALEDUCADO";