const div = document.querySelector("div").addEventListener("click", getTarget);
const form = document
    .querySelector("form")
    .addEventListener("click", getTarget);
const button = document
    .querySelector("button")
    .addEventListener("click", getTarget);

const span = (document.querySelector(".event_prop").innerHTML =
    "Targetting Element");

const target = document.querySelector(".target");


// targetting Elements
function getTarget(e) {
    e.preventDefault();
    curr_target = e.currentTarget.tagName;
    target_clicked = e.target.tagName;
    event_this = this.tagName;

    target.innerHTML = `<div><h3>Current Target is ${curr_target}</h3><h3>Target is ${target_clicked}</h3><h3>"this" is ${event_this} </h3></div>`;
}
