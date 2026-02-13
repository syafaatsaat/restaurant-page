import "./styles.css";
import {
    generateHomeContent,
    generateMenuContent
} from "./menu.js";

const contentDiv = document.getElementById("content");

function clearContent() {
    let child = contentDiv.lastElementChild;
    while (child) {
        contentDiv.removeChild(child);
        child = contentDiv.lastElementChild;
    }
}

const buttons = document.querySelector("#nav");
buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case "home":
            clearContent();
            generateHomeContent();
            break;
        case "menu":
            clearContent();
            generateMenuContent();
            break;
        case "about":
            clearContent();
            break;
    }
});

generateHomeContent();
