// Debouncing Function
const myDebouncing = (cb, delay) => {
    let timer
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

const functionCall = myDebouncing((cb) => {
    cb()
}, 200)


// Input Search
const inputElement = document.getElementById("inputSearch")
const text = document.getElementById("text")
const triggered = document.getElementById("triggered")
const debounce_triggered = document.getElementById("debounce_triggered")

let debounced_count = 0
let count = 0




inputElement.addEventListener("keyup", (e) => {
    functionCall(() => {
        debounce_triggered.innerText = "Debounced Count " + ++debounced_count
    })
    text.innerHTML = e.target.value
    triggered.innerText = "Normal Count " + ++count
    // console.log(e.target.value)
})


// Button Clicked
const btn_clicked = document.querySelector("#btn_clicked");
const btn_clicked_debounced = document.querySelector("#btn_clicked_debounced");
const btn = document.querySelector(".buttonClicked");

let btn_clicked_count = 0;
let btn_clicked_count_debounced = 0;

const debouncedFunctionCall = myDebouncing(() => {
    btn_clicked_count_debounced += 1
    btn_clicked_debounced.innerHTML = "Debounced Function Clicked " + btn_clicked_count_debounced;
}, 800); // Adjust the debounce delay as needed

const btnClickedFunction = () => {
    btn_clicked.innerHTML = "Button Clicked " + ++btn_clicked_count;
    debouncedFunctionCall();
}
