const body = document.querySelector("body")
const modal_inner = document.querySelector(".modal_inner")
const modal_outer = document.querySelector(".modal_outer")
const long_content = document.querySelector(".long_content")
const open_modal_button = document.querySelector(".open_modal_button").addEventListener("click", () => toggleModal(true))
const close_modal_button = document.querySelector(".close_modal_button").addEventListener("click", () => toggleModal(false))

function toggleModal(flag) {
    if (flag) {
        modal_outer.style.display = "block"
        body.style.overflowY = "hidden"
    } else {
        modal_outer.style.display = "none"
        body.style.overflowY = "auto"


    }
}

modal_outer.addEventListener("click", function (e) {
    if (e.target.className.includes('modal_outer')) {
        toggleModal(false)
    }
})