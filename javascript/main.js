"use strict";

// Array di oggetti
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Grapgic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const col = document.querySelector(".col");

// Itero su ogni elemento dell'array
for (let i = 0; i < team.length; i++) {
  const teamMember = team[i];
  for (let key in teamMember) {
    console.log(`${key}: ${teamMember[key]}`);
  }
  console.log("------");

  // Creo gli elementi div col33 e gli aggiungo la classe col-33
  const col33 = document.createElement("col-33");
  col33.classList.add("col-33");

  // Creo gli elementi img, la sorgente dei file e gli appendo la chiave image dei vari oggetti,
  //li appendo a loro volta alla col33
  const img = document.createElement("img");
  img.src = "./img/" + teamMember.image;
  img.alt = teamMember.name + " in a close-up shot";
  img.classList.add("img-width");
  col33.append(img);

  // Creo gli elementi h3 e gli appendo la chiave name dei vari oggetti, li appendo a loro volta alla col33
  const h3 = document.createElement("h3");
  h3.innerText = teamMember.name;
  h3.classList.add("margin-tp");
  col33.append(h3);

  // Creo gli elementi span e gli appendo la chiave role dei vari oggetti, li appendo a loro volta alla col33
  const span = document.createElement("span");
  span.innerText = teamMember.role;
  col33.append(span);

  // Appendo al div col i vari div col33
  col.append(col33);
}

/*function elementsCreation(element, reference, target) {
  const element = document.createElement("element");
  element.append(reference);
  target.append(element);
  return;
}

elementsCreation(span, teamMember.role, col33); */
