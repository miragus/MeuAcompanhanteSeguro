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
        const imagem_login = document.getElementById('login-img');
        const imagens_sol = document.getElementsByClassName('icone-dark-light');
        
        trilho.classList.add('dark');
        body.classList.add('dark');
        if (header) header.classList.add('dark');
        if (footer) footer.classList.add('dark');
        
        for (let imagem of imagens) {
            imagem.setAttribute('src', './assets/images/icone-caixa-de-som-branco.png');
        }
        
        imagem_login.setAttribute('src', './assets/images/icone-login-verde-claro.png');
        
        for (let imagem of imagens_sol) {
            imagem.setAttribute('src', './assets/images/icone-sol-dark-mode.svg');
        }

        localStorage.setItem('dark-mode', 'enabled');
    }
    

    function disableDarkMode() {
        const imagens = document.getElementsByClassName('caixa-som');
        const imagem_login = document.getElementById('login-img');
        const imagens_sol = document.getElementsByClassName('icone-dark-light');
        
        trilho.classList.remove('dark');
        body.classList.remove('dark');
        if (header) header.classList.remove('dark');
        if (footer) footer.classList.remove('dark');

        for (let imagem of imagens) {
            imagem.setAttribute('src', './assets/images/icone-caixa-de-som-preto.png');
        }
        imagem_login.setAttribute('src', './assets/images/icone-login.svg');

        for (let imagem of imagens_sol) {
            imagem.setAttribute('src', './assets/images/icone-lua-dark-mode.svg'); 
        }

        localStorage.setItem('dark-mode', 'disabled');
    }
});

//---------------------------------------------------------------- Leitor

const botoesLer = document.querySelectorAll('.botaoLeitor');
let isSpeaking = false; 

botoesLer.forEach(botao => {
    botao.addEventListener('click', () => {
        if (isSpeaking) {
            speechSynthesis.cancel();
            isSpeaking = false; 
        } else {
            const separacao = botao.parentElement; 
            const h2Text = separacao.querySelector('h2').textContent.replace('Ler em Voz Alta', '').trim(); 
            const utterance = new SpeechSynthesisUtterance(h2Text); 

            speechSynthesis.speak(utterance); 
            isSpeaking = true;

            utterance.onend = () => {
                isSpeaking = false;
            };
        }
    });
});


//---------------------------------------------------------------- aumentar fonte

    let aumentado = false;

function redimensionarFonte() {
    const textos = document.querySelectorAll('h2');
    let larguraTela = window.innerWidth;
    for (let texto of textos) {
        let fontSizeStr = window.getComputedStyle(texto).fontSize;
        let fontSize = parseFloat(fontSizeStr);

        if (larguraTela <= 480) {
            if (aumentado) {
                texto.style.fontSize = (fontSize - 4) + 'px';
            } else {
                texto.style.fontSize = (fontSize + 4) + 'px';
            }
        } else {
            if (aumentado) {
                texto.style.fontSize = (fontSize - 5) + 'px';
            } else {
                texto.style.fontSize = (fontSize + 5) + 'px';
            }
        }
    }
    aumentado = !aumentado;
}

window.addEventListener('resize', () => {
    const textos = document.querySelectorAll('h2');
    let larguraTela = window.innerWidth;

    for (let texto of textos) {
        let fontSizeStr = window.getComputedStyle(texto).fontSize;
        let fontSize = parseFloat(fontSizeStr);

        if (larguraTela <= 480) {
            if (fontSize > 20) {
                texto.style.fontSize = '20px';
            }
        } else {
            if (fontSize < 24) {
                texto.style.fontSize = '24px';
            }
        }
    }
});

//-----------------------------------------------------------Abrir o menu do hamburguer

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburguer');
    const menu = document.getElementById('menu-hamburguer');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});


//// botão como chegar

document.getElementById("botao-como-chegar").addEventListener("click", function() {
    window.open("https://maps.app.goo.gl/mfbMLxPW73PYEYQS6", "_blank"); // abre o URL em uma nova aba
});