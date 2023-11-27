const goToTopBtn = document.getElementById("goToTopBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
}

goToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
});