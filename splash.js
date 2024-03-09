const possibleSplash =
    ["why hello there.", "please solve a captcha before clicking this text!", "look behind you", "6", "pit",
    "spin the t", "0 is a natural number!", "i feel like............... <br> skyblock",
    "member of FYPit", "there's a pocket in my knife",
    "how get axe", "figuring out what to do!"]

function changeText() {
    const text = document.getElementById("splash")
    let randomInt = getRandomInteger(0, possibleSplash.length)
    if (possibleSplash[randomInt] === text.innerHTML) {
        randomInt += 1
        randomInt %= possibleSplash.length;
    }
    text.innerHTML = possibleSplash[randomInt]
}

// taken from https://www.w3schools.com/js/js_random.asp
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}