// Home Status

let homeCount = 0;

function plusOne() {
    homeCount += 1;
    document.getElementById("home-btn").textContent = homeCount;
}

function plusTwo() {
    homeCount += 2
    document.getElementById("home-btn").textContent = homeCount
}

function plusThree() {
    homeCount += 3;
    document.getElementById("home-btn").textContent = homeCount;
}


// Guest Status

let guestCount = 0;

function guestPlusOne() {
    guestCount += 1;
    document.getElementById("guest-btn").textContent = guestCount;
}
function guestPlusTwo() {
    guestCount += 2;
    document.getElementById("guest-btn").textContent = guestCount;
}
function guestPlusThree() {
    guestCount += 3;
    document.getElementById("guest-btn").textContent = guestCount;
}



// Save Items

function saveClick() {
    let homeCountStr = homeCount + " - "
    document.getElementById("home-count").textContent += homeCountStr
    
    let guestCountStr = guestCount + " - "
    document.getElementById("guest-count").textContent += guestCountStr
}