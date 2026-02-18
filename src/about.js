import { 
    contentDiv, 
    headerDiv,
    changeHeader,
    addTextWithBreaks,
    createAndAppendElement,
    changeBackgroundImage
} from "./functions.js";

function generateAboutContent() {
    changeHeader();
    createAndAppendElement(
        "h1", "ABOUT US", headerDiv
    );
    changeBackgroundImage('ABOUT');
    
    const storyDiv = createAndAppendElement(
        "div", null, contentDiv, "story"
    );
    createAndAppendElement(
        "h1", "Our Story", storyDiv
    );
    
    const storyText = `
        A love for comforting Western classics and handcrafted cheesecakes 
        inspired us to create a space where people can gather, relax, and 
        indulge.
    `;
    createAndAppendElement(
        "p", storyText, storyDiv, null, null, true
    );

    const addressDiv = createAndAppendElement(
        "div", null, contentDiv, "address"
    );
    
    createAndAppendElement(
        "h1", "Visit Us", addressDiv
    );

    const row1Div = createAndAppendElement(
        "div", null, addressDiv, null, ["row"]
    );
    createAndAppendElement(
        "h2", "DINE IN", row1Div
    );
    createAndAppendElement(
        "p", "Walk-ins are welcome!", row1Div
    );
    createAndAppendElement(
        "button", "RESERVE A TABLE", row1Div, "reserve"
    );

    const row2Div = createAndAppendElement(
        "div", null, addressDiv, null, ["row"]
    );
    createAndAppendElement(
        "h2", "OPERATING HOURS", row2Div
    );
    const firstTimeP = createAndAppendElement(
        "p", null, row2Div
    );
    createAndAppendElement(
        "strong", "Monday - Thursday: ", firstTimeP
    );
    firstTimeP.appendChild(document.createTextNode("9:00 AM - 9:00 PM"));
    const secondTimeP = createAndAppendElement(
        "p", null, row2Div
    );
    createAndAppendElement(
        "strong", "Friday - Sunday: ", secondTimeP
    );
    secondTimeP.appendChild(document.createTextNode("9:00 AM - 10:00 PM"));
    const thirdTimeP = createAndAppendElement(
        "p", null, row2Div
    );
    createAndAppendElement(
        "strong", "Public Holiday (Subject to changes): ", thirdTimeP
    );
    thirdTimeP.appendChild(document.createTextNode("9:00 AM - 10:00 PM"));

    const row3Div = createAndAppendElement(
        "div", null, addressDiv, null, ["row"]
    );
    createAndAppendElement(
        "h2", "ADDRESS", row3Div
    );
    createAndAppendElement(
        "p", "123 Westview Road 01-67, S626123", row3Div
    );
    createAndAppendElement(
        "p", "WandaVision Mall", row3Div
    );

    const faqsDiv = createAndAppendElement(
        "div", null, contentDiv, "faqs"
    );
    createAndAppendElement(
        "h1", "FAQS", faqsDiv
    );
    createAndAppendElement(
        "h4", "Q. Is this establishment halal-certified?",
        faqsDiv
    );
    const faqText = `
        We are currently in the process of getting a halal certification. And, 
        this is a Muslim-owned business so we only use halal ingredients and 
        tools.
    `;
    createAndAppendElement(
        "p", faqText, faqsDiv
    );

}

export { generateAboutContent };