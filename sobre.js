// Função para criar o efeito de digitação
function typeWriter(text, element, delay = 50) {
    let i = 0;
    const speed = delay;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Event listener para garantir que o DOM foi completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Texto a ser exibido no efeito de digitação
    const introText = "Olá, meu nome é Wender. Sou graduado em Engenharia Mecânica e tenho uma pós-graduação em Engenharia de Segurança do Trabalho e em Ciência de Dados e Analytics (Data Science). Ao longo da minha carreira, tenho trabalhado para integrar minha formação técnica com as mais recentes tecnologias e abordagens analíticas, proporcionando soluções inovadoras e eficientes.";

    // Elemento onde o texto será exibido
    const textElement = document.getElementById('intro-text');

    // Chamada da função typeWriter com o texto desejado
    typeWriter(introText, textElement);
});
