const animation = document.getElementById("animation")


let counter = 0; //lettre
let counterWord = 0; //mots
let words = ["design", "frontend", "backend", "testing"]


setInterval(() => {
    if (counter === words[counterWord].length) {
        counter = 0;
        animation.textContent = "";
        counterWord++;
        if (counterWord === words.length) {
            counterWord = 0;
        }
    }

    animation.textContent += words[counterWord][counter]
    counter++


}, 400)

