const approveBtn = document.getElementById("approveBtn");
const unlockBtn = document.getElementById("unlockBtn");
const joinBtn = document.getElementById("joinBtn");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const loadingScreen = document.getElementById("loadingScreen");
const screen4 = document.getElementById("screen4");

const terminalOutput = document.getElementById("terminalOutput");

const stats = document.getElementById("stats");

const bar1=document.getElementById("bar1");
const bar2=document.getElementById("bar2");
const bar3=document.getElementById("bar3");
const bar4=document.getElementById("bar4");

const value1=document.getElementById("value1");
const value2=document.getElementById("value2");
const value3=document.getElementById("value3");
const value4=document.getElementById("value4");

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
"✓ New Year's Eve with random (baked) strangers ... survived",
"✓ Road trip to Liverpool ......................... completed",
"✓ Everton victory over Arsenal ................... witnessed",
"✓ Austrian snowboarding adventure ................ completed",
"✓ Being the favourite teammate ................... confirmed",
"✓ Road to Champ .................................. ongoing",

"",

"----------------------------------------------",

"",

"Searching for final achievement...",

"",

"Achievement unlocked!",

"",

"Reviewing all memories...",

"",

"Result:",

"Worth keeping on the team."

"Analyzing candidate...",

"",

        ];

    let index = 0;

    const interval = setInterval(() => {

let line = lines[index];

// Eerst de complete achievement vervangen
line = line.replace(
    "Achievement unlocked!",
    "<span style='color:#FFD700; font-weight:bold; text-shadow:0 0 10px #FFD700;'> Achievement unlocked!</span>"
);

// Daarna pas de losse groene woorden
line = line.replace("completed", "<span class='green'>completed</span>");
line = line.replace("survived", "<span class='green'>survived</span>");
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

// RESULT groter
line = line.replace(
    "Result:",
    "<span class='result-title'>RESULT</span>"
);

// Groene eindconclusie
line = line.replace(
    "Worth keeping on the team.",
    "<span class='final-result'>🏆 Worth keeping on the team.</span>"
);

terminalOutput.innerHTML += line + "<br>";

index++;

if(index >= lines.length){

    clearInterval(interval);

    stats.classList.remove("hidden");

    setTimeout(()=>{
        bar1.style.width="100%";
        value1.innerHTML="100%";
    },300);

    setTimeout(()=>{
        bar2.style.width="100%";
        value2.innerHTML="Legendary";
    },1800);

    setTimeout(()=>{
        bar3.style.width="100%";
        value3.innerHTML="Elite";
    },3300);

    setTimeout(()=>{
        bar4.style.width="100%";
        value4.innerHTML="S-Tier";
    },4800);

    setTimeout(()=>{
        unlockBtn.classList.remove("hidden");
    },5200);

}

},700);

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
