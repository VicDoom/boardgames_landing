const modal = document.getElementsByClassName("modal-message")[0];
const modalLayout = document.getElementsByClassName("modal-message__layout")[0];
const catalogItems = document.getElementsByClassName("catalog-item");

const makeModalVisible = () => {
    modal.classList.add("modal-message--visible");
}

modalLayout.addEventListener('click', function () {
    modal.classList.remove("modal-message--visible");
})

for (let i = 0; i < catalogItems.length; i++) {
    catalogItems[i].addEventListener('click', function() {
        makeModalVisible();
    })
}