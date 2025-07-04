/* Efeito digitação */
const titulo = document.querySelector('.titulo');
const textoOriginal = titulo.textContent;
let i = 0;

titulo.textContent = '';

function typeWriter() {
    if (i < textoOriginal.length) {
        titulo.textContent += textoOriginal.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

setTimeout(typeWriter, 500);

/* transição imagem */
const imagem = document.querySelector('.imagem img');
const imagemOriginal = 'imagem1.png';
const imagemHover = 'imagem2.png';

imagem.addEventListener('mouseenter', () => {
    imagem.style.opacity = '0'; 
    setTimeout(() => {
        imagem.src = imagemHover; 
        imagem.style.opacity = '1'; 
    }, 150); 
});

imagem.addEventListener('mouseleave', () => {
    imagem.style.opacity = '0'; 
    setTimeout(() => {
        imagem.src = imagemOriginal; 
        imagem.style.opacity = '1';
    }, 150);
});