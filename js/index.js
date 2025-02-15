let input_name = "";

// Panels
const panels = [
    {
        dialogue: "Tap/click anywhere to begin"
    },
    {
        image: "duck",
        dialogue: "Why hello there! It's a wonderful day today isn't it?",
        top_button: "yes!",
        bottom_button: "sure is!"
    },
    {
        image: "duck",
        dialogue: "Ah yes, there is a magical feeling of love in the air. It must be a special day today!",
        top_button: "it's valentines day!",
        bottom_button: "oh really? i didn't notice"
    },
    {
        image: "duck",
        dialogue: "Oh that's right! Silly me, how could i forget? It's Valentine's Day, after all!",
        top_button: "uh huh",
        bottom_button: "you're a silly duck"
    },
    {
        image: "duck",
        dialogue: "Well miss, have you received your Valentine this year?",
        top_button: "no",
        bottom_button: "my boyfriend forgot it's valentine's day"
    },
    {
        image: "surprised_duck",
        dialogue: "What?! That can't be right. Surely someone has sent you a Valentine!",
        top_button: "nope",
        bottom_button: "nuh uh"
    },
    {
        image: "duck",
        dialogue: "Maybe I have a letter for you here in my bag. What's your name, miss?",
        input: true
    },
    {
        image: "duck",
        input_name: "",
        dialogue: `Nice to meet you, miss ${this.input_name}. Let's see here...`
    },
    {
        image: "duck",
        dialogue: "..."
    },
    {
        image: "duck",
        dialogue: "... ... ..."
    },
    {
        image: "duck",
        dialogue: "Ah yes! Here we are! A letter for you, miss ___!",
        letter_button: true
    },
    {
        letter: true
    },
    {
        image: "duck",
        dialogue: "I knew someone as wonderful as you would have a Valentine! Looks like it came just in time!",
        top_button: "thank you mr. duck!"
    },
    {
        image: "duck",
        dialogue: "Well I better be off, lots more Valentines to deliver today! After while!",
        top_button: "bye bye!",
        bottom_button: "in awhile!"
    },
    {
        image: "poof",
        dialogue: "(Mr. Duck zooms off)"
    },
    {
        image: "letter",
        dialogue: "the end."
    }
];

let panelIndex = -1;

// advance a panel
const advance = () => {
    panelIndex++;
    const currentPanel = panels[panelIndex];
    console.log("Panel: ", panelIndex, currentPanel);
    
    // buttonless panels
    if (panelIndex === 0 || panelIndex === 7 || panelIndex === 14) document.body.addEventListener("click", advance);
    else document.body.removeEventListener("click", advance);

    // timed panels
    if (panelIndex === 8 || panelIndex === 9) setTimeout(advance, 2500);

    // image
    const image = document.getElementById("scene")
    if (currentPanel.image) {
        image.style.display = "block";
        image.src = `imgs/${currentPanel.image}.png`;
    } else image.style.display = "none";

    // dialogue
    const dialogue = document.getElementById("dialogue");
    if (currentPanel.dialogue) dialogue.style.display = "block";
    else dialogue.style.display = "none";
    dialogue.innerHTML = `<h1>${currentPanel.dialogue}</h1>`

    // buttons
    const topButton = document.getElementById("top_button");
    if (currentPanel.top_button) topButton.style.display = "block";
    else topButton.style.display = "none";
    topButton.innerText = currentPanel.top_button;
    
    const bottomButton = document.getElementById("bottom_button");
    if (currentPanel.bottom_button) bottomButton.style.display = "block";
    else bottomButton.style.display = "none";
    bottomButton.innerText = currentPanel.bottom_button;

    // input
    const input = document.getElementById("input");
    if (currentPanel.input) {
        const inputText = document.createElement("input_text");
        inputText.innerHTML = `<input type="text" placeholder="Name">`;
        input.appendChild(inputText);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded");
    advance();
});

document.getElementById("top_button").addEventListener("click", advance);
document.getElementById("bottom_button").addEventListener("click", advance);
