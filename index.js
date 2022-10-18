let homeCounter = document.getElementById('home-counter')
let guestCounter = document.getElementById('guest-counter')

let homeValue = 0
let guestValue = 0

homeCounter.textContent = homeValue
guestCounter.textContent = guestValue

function plusOne(){
    homeValue += 1
    homeCounter.textContent = homeValue
}

function plusTwo(){
    homeValue += 2
    homeCounter.textContent = homeValue    
}

function plusThree(){
    homeValue += 3
    homeCounter.textContent = homeValue    
}

function plusOneGuest(){
    guestValue += 1
    guestCounter.textContent = guestValue
}

function plusTwoGuest(){
    guestValue += 2
    guestCounter.textContent = guestValue
}

function plusThreeGuest(){
    guestValue += 3
    guestCounter.textContent = guestValue
}

