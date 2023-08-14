// Give a 2nd parameter as true or capture: true to go from parent node to child known as capturing or tricking
const div = document.querySelector('div').addEventListener("click", function () {
    alert("Clicked on " + "div")
}, { capture: true });
const form = document.querySelector('form').addEventListener("click", function () {
    alert("Clicked on " + "form")
}, true)
const button = document.querySelector('button').addEventListener("click", function () {
    alert("Clicked on " + "button")
}, true)


const span = document.querySelector(".event_prop").innerHTML = "Capturing"