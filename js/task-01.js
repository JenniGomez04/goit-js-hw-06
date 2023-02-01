let categoryUl = document.querySelector("#categories");

let item = categoryUl.getElementsByClassName("item");
console.log("Number of categories:", item.length);

let nameH1 = item[0].firstElementChild;
console.log("Category:" , nameH1.textContent);

let elementsAnimals =  categoryUl.children[0].children[1].childElementCount;
console.log('Elements:', elementsAnimals);

let nameH2 = item[1].firstElementChild;
console.log("Category:" , nameH2.textContent);

let elementsProducts =  categoryUl.children[1].children[1].childElementCount;
console.log('Elements:', elementsProducts);

let nameH3 = item[2].firstElementChild;
console.log("Category:" , nameH3.textContent);

let elementsTechnologies =  categoryUl.children[2].children[1].childElementCount;
console.log('Elements:', elementsTechnologies);

// children = devuelve elementos secundarios del elemento que se invoco
// childrenElementCount = propiedad de solo lectura devuelve el número de elementos secundarios de este elemento.