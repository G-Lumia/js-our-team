/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */

// NAME     SURNAME    ROLE                      IMAGE
// Wayne    Barnett	 Founder & CEO	          wayne-barnett-founder-ceo.jpg
// Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
// Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
// Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
// Scott    Estrada	Developer	              scott-estrada-developer.jpg
// Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg


// viene creato l'array di oggetti

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image : "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela  Caroll",
        role: "Chief Editor",
        image : "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter  Gordon",
        role: "Office Manager",
        image : "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela  Lopez",
        role: "Social Media Manager",
        image : "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott  Estrada",
        role: "Developer",
        image : "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara  Ramos",
        role: "Graphic Designer",
        image : "barbara-ramos-graphic-designer.jpg"
    }
];

// viene puntato l'elemento in html responsabile di contenere le carte
const cards = document.getElementById("cards");


// vengono create le varie card dei membri del team, ciclando l'array team

for(let i=0; i<team.length; i++)
{
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-3");
    const img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = "./img/" + team[i].image;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const name = document.createElement("h2");
    name.textContent = team[i].name;

    const role = document.createElement("p");
    role.textContent = team[i].role;

    card.appendChild(img);
    cardContent.appendChild(name);
    cardContent.appendChild(role);

    card.appendChild(cardContent);
    cards.appendChild(card);
}

