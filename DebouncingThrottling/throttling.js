const myThrottle = (cb, delay) => {
    let flag = true
    return function (...args) {
        if (flag) {
            cb(...args)
            flag = false
            setTimeout(() => {
                flag = true
            }, delay)
        }
    }
}


const btn_clicked_throttle_basic = document.querySelector("#btn_clicked_throttle_basic");
const btn_clicked_throttle = document.querySelector("#btn_clicked_throttle");
const btn_throttle = document.querySelector(".buttonClicked_throttle");

let btn_clicked_throttle_basic_count = 0;
let btn_clicked_count_throttle = 0;

const callingMyThrottling = myThrottle(() => {
    btn_clicked_throttle.innerHTML = "Throttling Clicked " + ++btn_clicked_count_throttle
}, 800)

function btnClickedFunctionThrottle() {
    btn_clicked_throttle_basic.innerHTML = "Btn Clicked " + ++btn_clicked_throttle_basic_count;
    callingMyThrottling()

}