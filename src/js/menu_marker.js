const marker = document.querySelector('.menu__marker');
const menuElements = document.querySelectorAll('.menu__element');

const setMarker = (e) => {
    marker.style.left = `${e.offsetLeft}px`;
    marker.style.width = `${e.offsetWidth}px`;
}

menuElements.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        setMarker(e.target);
    })
})