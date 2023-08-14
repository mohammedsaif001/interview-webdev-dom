// If you dont want either bubbling or capturing you can give stop propagation to this event triggering and only pops on which ele its clicked
const div = document.querySelector('div').addEventListener("click", function (e) {
    e.stopPropagation()
    alert("Clicked on " + "div")
})
const form = document.querySelector('form').addEventListener("click", function (e) {
    e.stopPropagation()
    alert("Clicked on " + "form")
})
const button = document.querySelector('button').addEventListener("click", function (e) {
    e.stopPropagation()
    alert("Clicked on " + "button")
})


const span = document.querySelector(".event_prop").innerHTML = "Stop Propagation"