let countEl = document.getElementById("count-el")
let CountEl = document.getElementById("count")
let Reset = document.getElementById("reset-el")

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}
function increment2() {
    count += 2
    countEl.innerText = count
}
function increment3(){
    count += 3
    countEl.innerText = count
}
function increment4(){
    count += 5
    countEl.innerText = count
}


let count1 = 0

function incrementguest() {
    count1 += 1
    CountEl.textContent = count1
}
function incrementguest2() {
    count1 += 2
    CountEl.textContent = count1
}
function incrementguest3() {
    count1 += 3
    CountEl.textContent = count1
}
function incrementguest4() {
    count1 += 5
    CountEl.textContent = count1
}


function reset(){
    countEl.innerText = 0
    CountEl.innerText = 0
    count = 0
    count1 = 0
}
