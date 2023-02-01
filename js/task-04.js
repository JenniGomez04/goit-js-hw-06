
const eventDecrement = document.querySelector('button[data-action="decrement"]'); //consulta btn disminuye
const eventIncrement = document.querySelector('button[data-action="increment"]'); //consulta btn incrementa
const value = document.getElementById("value");
let counterValue = 0;  //contador inicializa en cero

//console.log(eventDecrement, eventIncrement);


const decrementP = eventDecrement.addEventListener("click", () => {
    counterValue --;  // Lo que hay en el contador se resta de a uno
    value.textContent = counterValue;  //lo que hay en la etiqueta value que es igual a 0 en html cambia a lo del contador
});


const incrementP = eventIncrement.addEventListener("click", () => {
    counterValue ++; // Lo que hay en el contador se suma de a uno
    value.textContent = counterValue; //lo que hay en la etiqueta value que es igual a 0 en html cambia a lo del contador
});
    

//console.log(eventIncrement.dataset.action);


/*const cont = document.querySelector("#counter");
console.log(cont);
const numb = document.getElementById("value");
console.log(numb);
let numero = 0;

function decrement(){
    numero++;
    numb.textContent = numero;
}

function increment(){
    numero--;
    numb.textContent = numero;
}*/