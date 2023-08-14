// By default the event propagates from bottom to up like a bubble thats why bubbling
const div = document.querySelector('div').addEventListener("click", function () {
    alert("Clicked on " + "div")
})
const form = document.querySelector('form').addEventListener("click", function () {
    alert("Clicked on " + "form")
})
const button = document.querySelector('button').addEventListener("click", function () {
    alert("Clicked on " + "button")
})


const span = document.querySelector(".event_prop").innerHTML = "Bubbling"