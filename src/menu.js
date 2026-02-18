import { 
    contentDiv,
    headerDiv,
    changeHeader,
    createAndAppendElement,
    changeBackgroundImage
} from "./functions.js";

function addMenu(section, name, price) {
    const rowDiv = createAndAppendElement(
        "div", null, section, null, ["row"]
    );

    createAndAppendElement(
        "p", name, rowDiv, null, ["dish-name"]
    );

    createAndAppendElement(
        "p", price, rowDiv
    );
}

function generateMenuContent() {
    changeHeader();
    createAndAppendElement(
        "h1", "MENU", headerDiv
    );
    changeBackgroundImage('MENU');

    const menuDiv = createAndAppendElement(
        "div", null, contentDiv, "menu"
    );

    const mainsSection = createAndAppendElement(
        "div", null, menuDiv, null, ["section"]
    );
    createAndAppendElement(
        "h2", "Mains", mainsSection
    );
    addMenu(mainsSection, "Chicken Alfredo Pasta", "11.90");
    addMenu(mainsSection, "Salmon Aglio Olio", "13.90");
    addMenu(mainsSection, "Ribeye Steak", "18.90");

    const dessertsSection = createAndAppendElement(
        "div", null, menuDiv, null, ["section"]
    );
    createAndAppendElement(
        "h2", "Desserts", dessertsSection
    );
    addMenu(dessertsSection, "Cookies n Cream Cheesecake", "5.50");
    addMenu(dessertsSection, "Mango Mousse Cake", "5.50");

    const beveragesSection = createAndAppendElement(
        "div", null, menuDiv, null, ["section"]
    );
    createAndAppendElement(
        "h2", "Beverages", beveragesSection
    );
    addMenu(beveragesSection, "Iced Lemon Tea", "3.50");
    addMenu(beveragesSection, "Strawberry Matcha Latte", "5.50");
}

export {
    generateMenuContent
};