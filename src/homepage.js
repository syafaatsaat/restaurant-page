import { 
    contentDiv, 
    addTextWithBreaks 
} from "./functions.js";

function generateHomeContent() {
    const logoH1 = document.createElement("h1");
    logoH1.setAttribute("id", "logo");
    logoH1.textContent = "SHEF";
    contentDiv.append(logoH1);

    const headlineH2 = document.createElement("h2");
    headlineH2.setAttribute("id", "headline");
    const headlineText = `
        A Taste of the West, A Slice of Bliss, ^Prepared by your Favourite 
    `;
    addTextWithBreaks(headlineH2, headlineText, false);
    const strongShef = document.createElement("strong");
    strongShef.textContent = "SHEF";
    headlineH2.append(strongShef);
    contentDiv.append(headlineH2);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.setAttribute("id", "description");
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
    addTextWithBreaks(descriptionDiv, descriptionText);
    contentDiv.append(descriptionDiv);
}

export {
    generateHomeContent 
};