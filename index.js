let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
var audio = new Audio("Audio.mp3")
var inputEl = document.getElementById("input-el")

//let count = 0

function increment() {
 //   count += 1
 if (inputEl.value == ""){
     countEl.textContent = "0";
 }
 else{
    countEl.textContent = inputEl.value;   
 }
    audio.play()
    save()
}

function save() {
    let count = inputEl.value;
    if (count==""){
        count = 0
    }
    else{
        count = inputEl.value;
    }
    let countStr = count + " - "
    saveEl.textContent += countStr
}

