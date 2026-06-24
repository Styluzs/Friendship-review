const approveBtn = document.getElementById("approveBtn");
const unlockBtn = document.getElementById("unlockBtn");
const joinBtn = document.getElementById("joinBtn");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

const terminalOutput = document.getElementById("terminalOutput");

approveBtn.addEventListener("click", startTerminal);

function startTerminal() {

    screen1.classList.remove("active");
    screen2.classList.add("active");

    const lines = [
        "$ npm run friendship",
        "",
        "Initializing friendship...",
        "",
        "Loading memories...",
        "",
        "✓ Endless game nights: completed",
        "✓ Karaoke bar parties: survived",
        "✓ New Year's Eve with random (baked) strangers: unlocked",
        "✓ Road trip to the UK: completed",
        "✓ Everton victory over Arsenal: witnessed",
        "✓ Austrian snowboarding adventure: completed",
        "✓ Being the favourite teammate: confirmed",
        "✓ Road to Champ: ongoing",
        "",
        "Analyzing candidate...",
        "",
        "✓ Trust level: 100%",
        "✓ Loyalty: Legendary",
        "✓ Reliability: Elite",
        "✓ Team chemistry: S-Tier",
        "",
        "Searching for final achievement...",
        "",
        "Achievement found.",
        "",
        "Reviewing all memories...",
        "",
        "Result:",
        "Worth keeping on the team."
    ];

    let index = 0;

    const interval = setInterval(() => {

        terminalOutput.innerHTML += lines[index] + "\n";

        index++;

        if(index >= lines.length){

            clearInterval(interval);

            unlockBtn.classList.remove("hidden");

        }

    }, 700);

}

unlockBtn.addEventListener("click", () => {

    screen2.classList.remove("active");
    screen3.classList.add("active");

});

joinBtn.addEventListener("click", () => {

    screen3.classList.remove("active");
    screen4.classList.add("active");

});
