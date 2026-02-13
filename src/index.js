import "./styles.css";
import { generateHomeContent } from "./homepage.js";

const contentDiv = document.getElementById("content");

function clearContent() {
    let child = contentDiv.lastElementChild;
    while (child) {
        contentDiv.removeChild(child);
        child = contentDiv.lastElementChild;
    }
}

const buttons = document.querySelector("button");
buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case "home":
            clearContent();
            generateHomeContent();
            break;
        case "menu":
            break;
        case "about":
            break;
    }
});

generateHomeContent();
