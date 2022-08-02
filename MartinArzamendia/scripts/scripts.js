function sigPregunta() {
    alert("no sos tan tonto como pensaba, siguiente pregunta");
}

class persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const persona1 = new persona(nombre = prompt("primero decime como te llamas no?"));

alert(`${this.nombre} te vamos a hacer unas preguntas y si no las sabes es porque sos re tonto`);


let debut = parseInt(prompt("¿En que año debuto NUEST?"));
while (debut != 2012) {
    alert("RESPUESTA INCORRECTA bobi");
    debut = prompt("intentelo de nuevo ");
}

sigPregunta();

let pregunta2 = prompt("¿Cuanto mide un perro promedio?");
if (pregunta2 >= 15 && pregunta2 <= 110) {
    alert("como vas a saber eso? no tenes vida? ajjajaja")
} else {
    alert("alto tontito como no sabes? jajaja")
    pregunta2 = prompt("Cuanto mide un perro promedio?")
}

alert("la verdad me cansaste y auque te siga haciendo mas preguntas ya se que sos re bobito")

