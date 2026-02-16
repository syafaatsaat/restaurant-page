function addTextWithBreaks(element, text, doubleBreaks = true) {
    let tempStr = "";
    //text = text.trim();
    let k = 0;

    for (let i = 0; i < text.length; ++i) {
        if (text[i] === '^') {
            tempStr = text.substring(k, i);
            element.appendChild(document.createTextNode(tempStr));
            element.appendChild(document.createElement('br'));
            if (doubleBreaks)
                element.appendChild(document.createElement('br'));

            tempStr = "";
            k = i + 1;
        }
    }

    tempStr = text.substring(k);
    element.appendChild(document.createTextNode(tempStr));
}

function createAndAppendElement(tag, text=null, parent=null, id=null, 
    classes=[], gotBreaks = false) 
{
    const element = document.createElement(tag);
    
    if (text !== null) {
        if (gotBreaks)
            addTextWithBreaks(element, text);
        else
            element.textContent = text;
    }

    if (id !== null)
        element.setAttribute("id", id);

    if (classes !== null) {
        if (classes.length > 0) {
            for (let className of classes) {
                element.classList.add(className);
            }
        }
    }

    if (parent != null)
        parent.append(element);

    return element;
}

const contentDiv = document.getElementById("content");

export { 
    contentDiv,
    addTextWithBreaks,
    createAndAppendElement
};