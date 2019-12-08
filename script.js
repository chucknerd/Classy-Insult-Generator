document.getElementById("button").addEventListener("click", () => {

    const insults = [
        "I can only explain it to you. I can't understand it for you.",
        "I envy everyone you have never met.",
        "I would love to insult you, but I'm afraid I won't do it as well as nature did.",
        "I have neither the time, nor the crayons, to explain this to you.",
        "You spit in the face of evolution.",
        "Your mother must have been of questionable birth.",
        "It's not your fault. Blame your parents.",
        "Bless your heart.",
        "If you have to ask, then you already know.",
    ];

    function randomQuote() {
        const randomInsult = Math.floor(Math.random()* (insults.length));
        document.getElementById("insults").innerHTML = insults[randomInsult];
    }

    randomQuote();
}); 





