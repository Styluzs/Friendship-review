const approveBtn = document.getElementById("approveBtn");
const unlockBtn = document.getElementById("unlockBtn");
const joinBtn = document.getElementById("joinBtn");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const loadingScreen = document.getElementById("loadingScreen");
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

"✓ Endless game nights ............................ completed",
"✓ Karaoke bar parties ............................ survived",
"✓ New Year's Eve with random (baked) strangers ... unlocked",
"✓ Road trip to Liverpool ......................... completed",
"✓ Everton victory over Arsenal ................... witnessed",
"✓ Austrian snowboarding adventure ................ completed",
"✓ Being the favourite teammate ................... confirmed",
"✓ Road to Champ .................................. ongoing",

"",

"----------------------------------------------",

"",

"Analyzing candidate...",

"",

"✓ Trust Level: 100%",
"✓ Loyalty: Legendary",
"✓ Reliability: Elite",
"✓ Team Chemistry: S-Tier",

"",

"Searching for final achievement...",

"",

"Achievement unlocked!",

"",

"Reviewing all memories...",

"",

"Result:",

"Worth keeping on the team."

    ];

    let index = 0;

    const interval = setInterval(() => {

let line = lines[index];

// Groene woorden
line = line.replace("completed", "<span class='green'>completed</span>");
line = line.replace("survived", "<span class='green'>survived</span>");
line = line.replace("unlocked", "<span class='green'>unlocked</span>");
line = line.replace("witnessed", "<span class='green'>witnessed</span>");
line = line.replace("confirmed", "<span class='green'>confirmed</span>");
line = line.replace("verified", "<span class='green'>verified</span>");

// Oranje woord
line = line.replace("ongoing", "<span class='orange'>ongoing</span>");

// Gouden achievement
line = line.replace(
    "Achievement unlocked!",
    "<span style='color:#FFD700; font-weight:bold;'>🏆 Achievement unlocked!</span>"
);

// Groene eindconclusie
line = line.replace(
    "Worth keeping on the team.",
    "<span class='green'>Worth keeping on the team.</span>"
);

terminalOutput.innerHTML += line + "<br>";

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
    loadingScreen.classList.add("active");

    setTimeout(() => {

        loadingScreen.classList.remove("active");
        screen4.classList.add("active");

    }, 2500);

});
