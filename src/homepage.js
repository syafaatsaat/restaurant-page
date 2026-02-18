import { 
    contentDiv, 
    headerDiv,
    changeHeader,
    changeBackgroundImage,
    addTextWithBreaks, 
    createAndAppendElement
} from "./functions.js";

function generateHomeContent() {
    changeHeader();
    createAndAppendElement(
        "h1", "SHEF", headerDiv, "logo"
    );
    changeBackgroundImage('HOME');

    const headlineText = `
        A Taste of the West, A Slice of Bliss, ^Prepared by your Favourite 
    `;
    const headlineH2 = createAndAppendElement(
        "h2", headlineText, contentDiv, "headline", null, true
    );
    createAndAppendElement(
        "strong", "SHEF", headlineH2
    );

    const descriptionDiv = createAndAppendElement(
        "div", null, contentDiv, "description"
    );
    const descriptionText = `
        Step into a warm and inviting space where the comforting flavours of 
        Western cuisine meet the art of exquisite desserts. Our restaurant is 
        more than just a place to dine — it's a place to savour, celebrate, and 
        create unforgettable moments. ^From perfectly grilled steaks and hearty 
        pastas to beautifully plated signature dishes, every meal is crafted 
        with passion and the finest ingredients. And just when you think it 
        couldn't get better, our dessert selection takes centre stage — 
        featuring velvety cheesecakes and light, luscious mousse cakes that 
        melt effortlessly with every bite. ^Whether you're gathering with 
        friends, planning a romantic evening, or simply treating yourself, our 
        welcoming atmosphere, attentive service, and thoughtfully curated menu 
        promise a dining experience that feels both indulgent and comforting. 
        Here, every visit is a celebration of flavour, quality, and sweet 
        satisfaction.
    `;
    createAndAppendElement(
        "p", descriptionText, descriptionDiv, null, null, true
    );
}

export {
    generateHomeContent 
};