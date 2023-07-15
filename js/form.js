const d = document;

export function valida(input){
    const tipoDeInput = input.dataset.type;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError (tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]


const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email:{
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    nacimiento:{
        valueMissing: "Este campo no puede estar vacío",
        customError: "debes tener al menos 18 años de edad"
    }

}


const validadores = {
    nacimiento:(input)=> validarNacimiento(input),
}

function mostrarMensajeDeError (tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach((error) =>{
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

/* Validaciones fecha de nacimiento */
function validarNacimiento(input){
    const fechaCliente  = new Date(input.value);
    let mensaje = '';
    if (!mayorDeEdad(fechaCliente)){
        mensaje = "debes tener al menos 18 años de edad";
    }
    input.setCustomValidity(mensaje)
};

function mayorDeEdad(fecha){
    const  fechaActual = new Date();
    const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(),
    fecha.getUTCDate()
    );
    return diferenciaFechas <=  fechaActual;    
}