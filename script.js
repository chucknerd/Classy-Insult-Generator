document.getElementById("button").addEventListener("click", () => {

    const insults = [
        "I can only explain it to you. I can't understand it for you.",
        "I envy everyone you have never met.",
        "You're not pretty enough to be that stupid.",
        "I would love to insult you, but I'm afraid I won't do it as well as nature did.",
        "I have neither the time, nor the crayons, to explain this to you.",
        "You spit in the face of evolution.",

    ];

    function randomQuote() {
        const randomInsult = Math.floor(Math.random()* (insults.length));
        document.getElementById("insults").innerHTML = insults[randomInsult];
    }

    randomQuote();
}); 





