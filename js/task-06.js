const validaText = document.getElementById("validation-input"); // consulto el input
console.log(validaText);

const numLog = Number(validaText.getAttribute("data-length")); // consulto el data-length para la verificación

validaText.addEventListener('blur' , (event) => {
if (event.currentTarget.value.length === numLog) {  // si los caracteres son = a la longitud de data-length
    event.currentTarget.classList.add('valid') // agg el color border valido verde
    event.currentTarget.classList.remove('invalid')  // elimina para que se mantenga el color
} else {
    event.currentTarget.classList.add('invalid') // si no es valido poner border rojo
}
});


//get atribute devuelve un elemento en particular, y todo lo que devuelve un input se devuelve como string

// OTRA FORMA DE REALIZARLO ¡Verificar error!
/*
const validaText = document.getElementById("validation-input"); // consulto el input
console.log(validaText);

const numLog = Number(validaText.getAttribute("data-length")); // consulto el data-length para la verificación

validaText.addEventListener('change' , () => {
    let logiWord = validaText.value.length; // contamos la longitud de los caracteres ingresados en el input
    console.log(logiWord);

    if (numlog === logiWord ) {
        
        validaText.addEventListener('blur', (e) => {

            let borValid = document.getElementById('validation-input.valid')
            borValid.style.borderColor = e;

        })
    } else {
        
        validaText.addEventListener("blur", (e) => {
            let borInvalid = document.getElementById('validation-input.invalid')
            borInvalid.style.borderColor = e;
        })
    }

});
*/


