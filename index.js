let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 100
    countEl.textContent = count + " meter/s"
}

function save() {
    let countStr = countEl.textContent
    saveEl.textContent +=  countStr + ", "
    countEl.textContent = 0
    count = 0
}
