import { 
    contentDiv, 
    addTextWithBreaks
} from "./functions.js";

function addMenu(section, name, price) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    const nameP = document.createElement("p");
    nameP.classList.add("dish-name");
    nameP.textContent = name;
    rowDiv.append(nameP);

    const priceP = document.createElement("p");
    priceP.textContent = price;
    rowDiv.append(priceP);

    section.append(rowDiv);
}

function generateMenuContent() {
    const menuH1 = document.createElement("h1");
    menuH1.textContent = "MENU";
    contentDiv.append(menuH1);

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menu");

    const mainsSection = document.createElement("div");
    mainsSection.classList.add("section");
    const mainsH2 = document.createElement("h2");
    mainsH2.textContent = "Mains";
    mainsSection.append(mainsH2);
    addMenu(mainsSection, "Chicken Alfredo Pasta", "11.90");
    addMenu(mainsSection, "Salmon Aglio Olio", "13.90");
    addMenu(mainsSection, "Ribeye Steak", "18.90");
    menuDiv.append(mainsSection);

    const dessertsSection = document.createElement("div");
    dessertsSection.classList.add("section");
    const dessertsH2 = document.createElement("h2");
    dessertsH2.textContent = "Desserts";
    dessertsSection.append(dessertsH2);
    addMenu(dessertsSection, "Cookies n Cream Cheesecake", "5.50");
    addMenu(dessertsSection, "Mango Mousse Cake", "5.50");
    menuDiv.append(dessertsSection);

    const beveragesSection = document.createElement("div");
    beveragesSection.classList.add("section");
    const beveragesH2 = document.createElement("h2");
    beveragesH2.textContent = "Beverages";
    beveragesSection.append(beveragesH2);
    addMenu(beveragesSection, "Iced Lemon Tea", "3.50");
    addMenu(beveragesSection, "Strawberry Matcha Latte", "5.50");
    menuDiv.append(beveragesSection);

    contentDiv.append(menuDiv);
}

export {
    generateMenuContent
};