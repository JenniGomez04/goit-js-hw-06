const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryHtml = document.querySelector(".gallery") // consulto la ul

const items = images.map(item => `alt="${item.alt}"` +  " " + `src="${item.url}"`); // retorna nueva array con alt y src
const etique = items.map( eti => `<li><img ${eti}></li>` ).join("");  // retorna array anterior con etiqueta li y img
galleryHtml.insertAdjacentHTML("afterbegin", etique); // inserta antes del 1er elemento
console.log(galleryHtml);


