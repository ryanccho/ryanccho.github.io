let username = "";
const panels = [
    {
        dialogue: `<h1>Tap/click anywhere to begin</h1>`
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>Why hello there! It's a wonderful day today isn't it?</h1>`,
        buttons: [
            { type: "button", value: "yes!" },
            { type: "button", value: "sure is!" }
        ]
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>Ah yes, there is a magical feeling of <span class="highlight">love</span> in the air. It must be a special day today!</h1>`,
        buttons: [
            { type: "button", value: "it's valentines day!" },
            { type: "button", value: "oh really? i didn't notice" }
        ]
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>Oh that's right! Silly me, how could i forget? It's <span class="highlight">Valentine's Day</span>, after all!</h1>`,
        buttons: [
            { type: "button", value: "uh huh" },
            { type: "button", value: "you're a silly duck" }
        ]
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>Well miss, have you received your <span class="highlight">Valentine</span> this year?</h1>`,
        buttons: [
            { type: "button", value: "no" },
            { type: "button", value: "my boyfriend forgot it's valentine's day" }
        ]
    },
    {
        image: "imgs/surprised_duck.png",
        dialogue: `<h1>What?! That can't be right. Surely someone has sent you a <span class="highlight">Valentine</span>!</h1>`,
        buttons: [
            { type: "button", value: "nope" },
            { type: "button", value: "nuh uh" }
        ]
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>Maybe I have a letter for you here in my bag. What's your name, miss?</h1>`,
        input: true
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>Nice to meet you, miss <span id="insert_name" class="highlight"></span>. Let's see here...</h1>`,
        insertName: true
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>...</h1>`
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>... ... ...<h1>`
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>Ah yes! Here we are! A letter for you, miss <span id="insert_name" class="highlight"></span>!</h1>`,
        insertName: true,
        buttons: [
            { type: "div", value: `<img id="letter_button" src=imgs/letter.png>` }
        ]
    },
    {
        card: true,
        buttons: [
            { type: "button", value: "close" }
        ]
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>I knew someone as wonderful as you would have a <span class="highlight">Valentine</span>! Looks like it came just in time!</h1>`,
        buttons: [
            { type: "button", value: "thank you mr. duck!" },
            { type: "button", value: "yayyyy" }
        ]
    },
    {
        image: "imgs/duck.png",
        dialogue: `<h1>Well I better be off, lots more <span class="highlight">Valentines</span> to deliver today! After while!</h1>`,
        buttons: [
            { type: "button", value: "bye bye!" },
            { type: "button", value: "in awhile!" }
        ]
    },
    {
        image: "imgs/poof.png",
        dialogue: `<h1>(Mr. Duck zooms off)</h1>`
    },
    {
        image: "imgs/letter.png",
        dialogue: `<h1>the end.</h1>`
    }
];
let panelIndex = -1;

// helper function to update elements
const updateElement = (elementID, value, property) => {
    const element = document.getElementById(elementID);
    element.style.display = value ? "block" : "none";
    if (value && property) element[property] = value;
}

// advance a panel
const advance = () => {
    panelIndex++;
    const currentPanel = panels[panelIndex];
    console.log("Panel: ", panelIndex, currentPanel);
    
    // buttonless panel
    if (panelIndex === 0) document.body.addEventListener("click", advance);
    else document.body.removeEventListener("click", advance);

    // timed panels
    if (panelIndex === 7 || panelIndex === 8 || panelIndex === 9 || panelIndex === 14) setTimeout(advance, 2500);

    // image
    updateElement("image", currentPanel.image, "src");

    // dialogue
    updateElement("dialogue", currentPanel.dialogue, "innerHTML");
    if (currentPanel.insertName) document.getElementById("insert_name").innerText = username;

    // buttons
    const buttons = document.getElementById("buttons");
    buttons.innerHTML = "";
    if (currentPanel.buttons) {
        currentPanel.buttons.forEach((button, index) => {
            const buttonElement = document.createElement(button.type);
            buttonElement.id = `button${index+1}`;
            buttonElement.innerHTML = button.value;
            buttonElement.addEventListener("click", advance);
            buttons.appendChild(buttonElement);
        });
    }

    // input
    updateElement("input", currentPanel.input);

    // card
    updateElement("card", currentPanel.card);
    document.getElementById("card_name").innerText = username;
    if (currentPanel.card) document.getElementById("image_container").style.display = "none";
    else document.getElementById("image_container").style.display = "flex";
}

// page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded");
    document.body.style.display = "block";
    advance();
});

// input
const usernameInput = document.getElementById("username_input");
usernameInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && usernameInput.value) {
        username = usernameInput.value;
        advance();
    }
});
