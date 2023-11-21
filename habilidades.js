document.addEventListener('DOMContentLoaded', function () {
    const verMaisBtns = document.querySelectorAll('.ver-mais-btn');

    // Adiciona um ouvinte de evento para cada botão "Ver Mais"
    verMaisBtns.forEach(function (verMaisBtn) {
        verMaisBtn.addEventListener('click', function () {
            // Obtém o elemento pai do botão (o <li>)
            const listItem = verMaisBtn.closest('li');

            // Alterna a visibilidade da descrição
            const descricao = listItem.querySelector('.descricao');
            descricao.classList.toggle('hidden');

            // Rotaciona a seta para indicar o estado atual
            verMaisBtn.classList.toggle('rotated');
        });
    });
});
