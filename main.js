const mBtn = document.querySelector('#m-btn');
let menuOpen = false;
mBtn.addEventListener('click', () => {
    if (!menuOpen) {
        mBtn.classList.add('open');
        menuOpen = true;
    } else {
        mBtn.classList.remove('open');
        menuOpen = false;
    }
})