    //---------------------------------------------------------------- carrossel
    let currentSlide = 0;
        const slides = document.querySelectorAll('#paragrafo-geral .slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function prevSlide() {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
            showSlide(currentSlide);
        }

        function nextSlide() {
            currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            showSlide(currentSlide);
        }
    //---------------------------------------------------------------- dark mode
    document.addEventListener('DOMContentLoaded', () => {
        const trilho = document.getElementById('trilho');
        const body = document.querySelector('body');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
    
        // Verifica o estado do modo dark no localStorage
        if (localStorage.getItem('dark-mode') === 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    
        trilho.addEventListener('click', () => {
            if (body.classList.contains('dark')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    
        function enableDarkMode() {
            const imagens = document.getElementsByClassName('caixa-som');
            trilho.classList.add('dark');
            body.classList.add('dark');
            if (header) header.classList.add('dark');
            if (footer) footer.classList.add('dark');
            for (let imagem of imagens) {
                imagem.setAttribute('src', './assets/images/icone-caixa-de-som-branco.png');
            }
            localStorage.setItem('dark-mode', 'enabled');
        }
    
        function disableDarkMode() {
            const imagens = document.getElementsByClassName('caixa-som');
            trilho.classList.remove('dark');
            body.classList.remove('dark');
            if (header) header.classList.remove('dark');
            if (footer) footer.classList.remove('dark');
            for (let imagem of imagens) {
                imagem.setAttribute('src', './assets/images/icone-caixa-de-som-preto.png');
            }
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

    //---------------------------------------------------------------- Leitor
    const botoesLer = document.querySelectorAll('.botaoLeitor');
    let isSpeaking = false; // Flag para verificar se está falando
    
    // Adiciona evento de clique a cada botão
    botoesLer.forEach(botao => {
        botao.addEventListener('click', () => {
            if (isSpeaking) {
                speechSynthesis.cancel(); // Para a leitura em andamento
                isSpeaking = false; // Atualiza a flag
            } else {
                const separacao = botao.parentElement; // Obtém o elemento pai do botão
                const h2Text = separacao.querySelector('h2').textContent.replace('Ler em Voz Alta', '').trim(); // Obtém o texto do h2
                const paragrafoText = separacao.nextElementSibling.textContent.trim(); // Obtém o texto do parágrafo <p> seguinte
                const texto = `${h2Text}. ${paragrafoText}`; // Concatena os textos do h2 e do parágrafo
                const utterance = new SpeechSynthesisUtterance(texto); // Cria objeto SpeechSynthesisUtterance
    
                // Definir o idioma da fala explicitamente para pt-BR
                utterance.lang = 'pt-BR';
    
                speechSynthesis.speak(utterance); // Inicia a leitura do texto
                isSpeaking = true; // Atualiza a flag
    
                // Quando a leitura terminar, reseta a flag
                utterance.onend = () => {
                    isSpeaking = false;
                };
            }
        });
    });    

    //---------------------------------------------------------------- aumentar fonte
    let aumentado = false;

    function redimensionarFonte() {
        const elementos = document.querySelectorAll('.texto-titulo, .texto-paragrafo, h2');
        let larguraTela = window.innerWidth;
    
        for (let elemento of elementos) {
            // Obter o tamanho atual da fonte do elemento
            let fontSizeStr = window.getComputedStyle(elemento).fontSize;
            let fontSize = parseFloat(fontSizeStr);
    
            // Verificar se o tamanho original da fonte já foi armazenado
            if (!elemento.hasAttribute('data-original-font-size')) {
                elemento.setAttribute('data-original-font-size', fontSize);
            }
    
            // Obter o tamanho original da fonte
            let fontSizeOriginal = parseFloat(elemento.getAttribute('data-original-font-size'));
    
            // Definir os tamanhos incrementais
        
            if (larguraTela <= 480) {
                if (!aumentado) {
                    elemento.style.fontSize = (fontSizeOriginal + 4) + 'px';
                } else {
                    elemento.style.fontSize = fontSizeOriginal + 'px';
                }
            } else {
                if (!aumentado) {
                    elemento.style.fontSize = (fontSizeOriginal + 5) + 'px';
                } else {
                    elemento.style.fontSize = fontSizeOriginal + 'px';
                }
            }
        }
        aumentado = !aumentado;
    }
    



window.addEventListener('resize', () => {
    const elementos = document.querySelectorAll('.texto-titulo, p, h2');
    let larguraTela = window.innerWidth;

    for (let elemento of elementos) {
        let fontSizeStr = window.getComputedStyle(elemento).fontSize;
        let fontSize = parseFloat(fontSizeStr);

        if (larguraTela <= 480) {
            if (fontSize > 20) {
                elemento.style.fontSize = '20px';
            }
        } else {
            if (fontSize < 24) {
                elemento.style.fontSize = '24px';
            }
        }
    }
});

    //-----------------------------------------------------------------Hamburguer

    document.addEventListener('DOMContentLoaded', () => {
        const hamburguer = document.getElementById('hamburguer');
        const menu = document.getElementById('menu-hamburguer');
    
        hamburguer.addEventListener('click', () => {
            hamburguer.classList.toggle('active');
            menu.classList.toggle('show');
        });
    });
    
// botão como chegar

document.getElementById("botao-como-chegar").addEventListener("click", function() {
    window.open("https://maps.app.goo.gl/mfbMLxPW73PYEYQS6", "_blank"); // abre o URL em uma nova aba
});
