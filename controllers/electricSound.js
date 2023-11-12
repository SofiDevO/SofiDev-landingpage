import toggleDarkMode from "../controllers/darkTheme.js";

const d = document;
const btnDarkMode = d.querySelector("[data-toogle]");

function shortCircuit() {
    let audio = new Audio();
    audio.src = "../assets/sounds/short_circuit.mp3";
    audio.volume -= 0.6;
    audio.play();
}

export function playSound() {
    let audio = new Audio();
    audio.src = "../assets/sounds/franks-electricity.mp3";
    audio.volume -= 0.7;
    audio.play();
}

let botonRayo = 0;

function clickHandler() {
    botonRayo++;

    if (botonRayo <= 10) {
        playSound();
    } else {
        shortCircuit();
        console.log("Hola " + botonRayo + ", reproduciendo shortCircuit()");
        // Si se han hecho 11 clics, desvincula el evento click
        if (botonRayo >= 11) {
            btnDarkMode.removeEventListener("click", clickHandler);
            console.log("Evento click desvinculado");
        }
    }
}

btnDarkMode.addEventListener("click", clickHandler);
