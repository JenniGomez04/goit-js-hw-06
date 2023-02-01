const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


 const list = document.getElementById("ingredients"); //Lista UL
 console.log(list);
 let fragArray = document.createDocumentFragment(); // Creación fragmento de codigo, sirve para tener todo 1 lugar y enviar como paquete al padre
 
 for (const ingredient of ingredients) {
   const element = document.createElement("li"); // crear el elemento dentro del for proque fuera solo me toma 1
   element.textContent = ingredient; //agregar propiedades desde js con textcontent
   fragArray.appendChild(element); //agregar al padre ul un hijo elemento li
 }
 
 list.appendChild(fragArray);  //enviar en lista el fragmento ya que seria más eficiente



 //OTRA FORMA DE HACERLO

// trayendo el id del ul de ingredientes de html
/*
const list = document.getElementById("ingredients");
console.log(list);

let fragArray = document.createDocumentFragment();

const element = document.createElement("li"); // creando la etiqueta li a mi lista en html
element.textContent = ingredients[0];  // devuelve el contenido de texto de 1 elemento, [ingreso al elemento del array]
element.setAttribute("class", "item");  // agregar clase llama item
list.appendChild(element); // agrega el elemento como hijo en la lista
console.log(element); // imprime por consola los elementos de la lista

const element1 = document.createElement("li");
element1.textContent = ingredients[1];
element1.setAttribute("class", "item");
list.appendChild(element1);
console.log(element1);


const element2 = document.createElement("li");
element2.textContent = ingredients[2];
element2.setAttribute("class", "item");
list.appendChild(element2);
console.log(element2);


const element3 = document.createElement("li");
element3.textContent = ingredients[3];
element3.setAttribute("class", "item");
list.appendChild(element3);
console.log(element3);

const element4 = document.createElement("li");
element4.textContent = ingredients[4];
element4.setAttribute("class", "item");
list.appendChild(element4);
console.log(element4);

const element5 = document.createElement("li");
element5.textContent = ingredients[5];
element5.setAttribute("class", "item");
list.appendChild(element5);
console.log(element5);

*/
