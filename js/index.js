let inputName = "";

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
        special_dialogue: `<h1>Ah yes, there is a magical feeling of <span class="highlight">love</span> in the air. It must be a special day today!</h1>`,
        top_button: "it's valentines day!",
        bottom_button: "oh really? i didn't notice"
    },
    {
        image: "duck",
        special_dialogue: `<h1>Oh that's right! Silly me, how could i forget? It's <span class="highlight">Valentine's Day</span>, after all!</h1>`,
        top_button: "uh huh",
        bottom_button: "you're a silly duck"
    },
    {
        image: "duck",
        special_dialogue: `<h1>Well miss, have you received your <span class="highlight">Valentine</span> this year?</h1>`,
        top_button: "no",
        bottom_button: "my boyfriend forgot it's valentine's day"
    },
    {
        image: "surprised_duck",
        special_dialogue: `<h1>What?! That can't be right. Surely someone has sent you a <span class="highlight">Valentine</span>!</h1>`,
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
        special_dialogue: `<h1>Nice to meet you, miss <span id="inputted_name" class="highlight"></span>. Let's see here...</h1>`,
        inputted_name: true
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
        special_dialogue: `<h1>Ah yes! Here we are! A letter for you, miss <span id="inputted_name" class="highlight"></span>!</h1>`,
        inputted_name: true,
        letter_button: true
    },
    {
        letter: true,
        top_button: "close"
    },
    {
        image: "duck",
        special_dialogue: `<h1>I knew someone as wonderful as you would have a <span class="highlight">Valentine</span>! Looks like it came just in time!</h1>`,
        top_button: "thank you mr. duck!"
    },
    {
        image: "duck",
        special_dialogue: `<h1>Well I better be off, lots more <span class="highlight">Valentines</span> to deliver today! After while!</h1>`,
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
    if (panelIndex === 0 || panelIndex === 7) document.body.addEventListener("click", advance);
    else document.body.removeEventListener("click", advance);

    // timed panels
    if (panelIndex === 8 || panelIndex === 9 || panelIndex === 14) setTimeout(advance, 2500);

    // image
    const image = document.getElementById("scene")
    if (currentPanel.image) {
        image.style.display = "block";
        image.src = `imgs/${currentPanel.image}.png`;
    } else image.style.display = "none";

    // dialogue
    const dialogue = document.getElementById("dialogue");
    if (currentPanel.dialogue) {
        dialogue.style.display = "block";
        dialogue.innerHTML = `<h1>${currentPanel.dialogue}</h1>`;
    } else if (currentPanel.special_dialogue) {
        dialogue.style.display = "block";
        dialogue.innerHTML = currentPanel.special_dialogue;
        if (currentPanel.inputted_name) document.getElementById("inputted_name").innerHTML = inputName;
    }
    else dialogue.style.display = "none";

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
        input.style.display = "block";
        const inputText = document.createElement("div");
        inputText.innerHTML = `<input type="text" placeholder="Name" id="name_input">`;
        input.prepend(inputText);
        inputText.addEventListener("keydown", event => {
            const nameInput = document.getElementById("name_input");
            if (event.key === "Enter" && nameInput.value) {
                inputName = nameInput.value;
                advance();
            }
        });
    } else input.style.display = "none";

    // letter button
    const letterButton = document.getElementById("letter_button");
    if (currentPanel.letter_button) letterButton.style.display = "block";
    else letterButton.style.display = "none";

    // card
    const cardContainer = document.getElementById("card_container");
    if (currentPanel.letter) {
        cardContainer.style.display = "block";
        cardContainer.innerHTML = `<div id="card">
        <div id="heart"><img src="imgs/heart.png"></div>
        <p>
        My dearest ${inputName},
        <br><br>
        Happy Valentines Dayyy!!! Hehehe I can't believe this is already our second Valentine's Day together! Whether it's a special day like this or just another Tuesday, I celebrate and cherish each and every moment I get with you because I'm just so blessed to have met you and to have the opportunity to build a love as wonderful as ours. You have single-handedly and wholly changed my life for the better, and I can only hope that I've done the same for you. Looking forward to many more days of eating at silly restaurants, going on adventures, solving magic puzzles, playing biscuitball, and celebrating Valentines. I love you from our Minecraft world and back (that's really far). Happy 2nd Valentine's to buggemses!!!
        <br><br>
        wiggles and giggles,<br>
        bug
        <br><br>
        P.S. willlll youuuu bee my valentinneeee??
        </p>
        </div>`;
        document.getElementById("image_container").style.display = "none";
    } else {
        cardContainer.style.display = "none";
        document.getElementById("image_container").style.display = "flex";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded");
    advance();
});

document.getElementById("top_button").addEventListener("click", advance);
document.getElementById("bottom_button").addEventListener("click", advance);
document.getElementById("letter_button").addEventListener("click", advance);
