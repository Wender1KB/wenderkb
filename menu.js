document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    // Adicione um evento de clique para os itens do menu (links)
    const menuItems = document.querySelectorAll('.nav-links a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Fecha o menu ao clicar em um item
            navLinks.classList.remove('show');
        });
    });
});
