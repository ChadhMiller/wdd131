// Get current year and populate in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date and populate in footer
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// //Hamburger Menu
// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('nav ul');

// navToggle.addEventListener('click', () => {
//    navMenu.classList.toggle('show');
// });

//Temple Array
const temples = [
   {
     templeName: "Aba Nigeria",
     location: "Aba, Nigeria",
     dedicated: "2005, August, 7",
     area: 11500,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
   },
   {
     templeName: "Manti Utah",
     location: "Manti, Utah, United States",
     dedicated: "1888, May, 21",
     area: 74792,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
   },
   {
     templeName: "Payson Utah",
     location: "Payson, Utah, United States",
     dedicated: "2015, June, 7",
     area: 96630,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
   },
   {
     templeName: "Yigo Guam",
     location: "Yigo, Guam",
     dedicated: "2020, May, 2",
     area: 6861,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
   },
   {
     templeName: "Washington D.C.",
     location: "Kensington, Maryland, United States",
     dedicated: "1974, November, 19",
     area: 156558,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
   },
   {
     templeName: "Lima Perú",
     location: "Lima, Perú",
     dedicated: "1986, January, 10",
     area: 9600,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
   },
   {
     templeName: "Mexico City Mexico",
     location: "Mexico City, Mexico",
     dedicated: "1983, December, 2",
     area: 116642,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
   },
   {
      templeName: "Baton Rouge Louisiana",
      location: "Baton Rouge, Louisiana, United States",
      dedicated: "2000, July, 16",
      area: 10890,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/1-ea20b19384c9f98d17ef56b627c79c3a75f62cb3.jpeg"
   },
   {
      templeName: "Vernal Utah",
      location: "Vernal, Utah, United States",
      dedicated: "1997, October, 11",
      area: 38771,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vernal-utah/400x250/vernal-temple-lds-82531-wallpaper.jpg"
   },
   {
      templeName: "Rexburg Idaho",
      location: "Rexburg, Idaho, United States",
      dedicated: "2008, Febuary, 10",
      area: 57504,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg"
   }
 ];

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");

oldLink.addEventListener("click", () => {
   createTempleCard(temples.filter(temple => temple.dedicated.includes("18")));
});

newLink.addEventListener("click", () => {
   createTempleCard(temples.filter(temple => !temple.dedicated.includes("18")));
});

largeLink.addEventListener("click", () => {
   createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
   createTempleCard(temples.filter(temple => temple.area < 10000));
});

homeLink.addEventListener("click", () => {
   createTempleCard(temples);
});

createTempleCard(temples);

function createTempleCard(filteredTemples){
   document.querySelector(".res-grid").innerHTML = "";
   filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = '<span class="label">Location: </span>' + temple.location;
      dedication.innerHTML = '<span class="label">Dedicated: </span>' + temple.dedicated;
      area.innerHTML = '<span class="label">Area: </span>' + temple.area + ' sq ft';
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", temple.templeName + 'Temple');
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector(".res-grid").appendChild(card);
   });
}
