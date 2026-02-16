import { 
    contentDiv, 
    addTextWithBreaks,
    createAndAppendElement
} from "./functions.js";

function generateAboutContent() {
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
    
    createAndAppendElement(
        "h2", "DINE IN", addressDiv
    );

    createAndAppendElement(
        "p", "Walk-ins are welcome!", addressDiv
    );

    createAndAppendElement(
        "button", "RESERVE A TABLE", addressDiv
    );

    createAndAppendElement(
        "h2", "OPERATING HOURS", addressDiv
    );

    createAndAppendElement(
        "p", "Monday - Thursday: 9:00 AM - 9:00 PM",
        addressDiv
    );

    createAndAppendElement(
        "p", "Friday - Sunday: 9:00 AM - 10:00 PM",
        addressDiv
    );

    createAndAppendElement(
        "p", "Public Holiday (Subject to changes): 9:00 AM - 10:00 PM",
        addressDiv
    );

    createAndAppendElement(
        "h2", "ADDRESS", addressDiv
    );

    createAndAppendElement(
        "p", "123 Westview Road 01-67, S626123",
        addressDiv
    );

    createAndAppendElement(
        "p", "WandaVision Mall", addressDiv
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