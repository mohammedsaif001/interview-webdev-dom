const event_delegation = document.querySelector('.event_delegation')


// Instead of adding event listeners to individual elements we can take advantage of bubbling and add only event listener only to the parent element and do the calculation
event_delegation.onclick = (e) => {
    alert(e.target.innerText)
}