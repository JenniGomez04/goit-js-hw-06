const docText= document.querySelector("#name-input");
const docSpan = document.querySelector("#name-output");

// Evento change se dispara despues de haber modificado un campo del formulario y dando enter o clic fuera (input, select, textarea)

docText.addEventListener("change", (event) => {
   if(docText.value === ""){
    docSpan.textContent = "Anonymous" //si la condicion esta vacia en el docSpan lo cambia en Anonymous
 } else {
      docSpan.textContent = event.currentTarget.value; //si no lo que ingrese el usuario
 }
  });


  // Metodo borrando manual cambia el nombre con metodo input

/*
  docText.addEventListener("input", (event) => {
   if(docText.value === ""){
    docSpan.textContent = "Anonymous" //si la condicion esta vacia en el docSpan lo cambia en Anonymous
 } else {
      docSpan.textContent = event.currentTarget.value; //si no lo que ingrese el usuario
 }
  });
*/

