const btnBack = document.querySelector(".change-color");
const bodyBack = document.querySelector("body");
const colorHex = document.querySelector(".color");


btnBack.addEventListener("click", () =>{
  // funcion que elige colores de forma aleatoria
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const colorRandom = getRandomHexColor(); // tiene asignación de cualquier color
  console.log(colorRandom); //imprime el color aleatorio
  colorHex.textContent = colorRandom; //el color actual cambia por el aleatorio

  bodyBack.style.backgroundColor = `${colorRandom}` //agregamos el color aleatorio al body y imprimimos el hexadecimal
});



