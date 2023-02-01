const changeValFon = document.getElementById("font-size-control");
const changeTextLin = document.getElementById("text");

const changeLin = changeValFon.value;


changeValFon.addEventListener("input", () => {
    const changeNew = changeValFon.value;  //nueva variable con lo que tiene
    changeTextLin.style.fontSize = `${changeNew}px`;  //variable texto entra a establecer el tamaño de la fuente = al nuevo valor que se vaya asignando
});