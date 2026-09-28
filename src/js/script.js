import htmlScreenshot from '../img/html-screenshot.png';
import cssScreenshot from '../img/css-screenshot.png';
import jsScreenshot from '../img/js-screenshot.png';

const codeImages = {
    html: htmlScreenshot,
    css: cssScreenshot,
    js: jsScreenshot,
};

let emptyElement = document.querySelector('.about .empty');
let titleElement = document.querySelector('.about .title');

let figureElements = document.querySelectorAll('.service figure');

function handleMouseMove( event ) {

    emptyElement.style.flexBasis = event.clientX + 'px';
    titleElement.style.flexBasis = event.clientY / 2 + 'px';

    figureElements.forEach( function( element ) {
        element.style.flexBasis = window.innerWidth - event.clientX + 'px';
    } );
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const allLinks = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-active');
});

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('is-active');
    });
});

if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', handleMouseMove);
}

const codeModal = document.getElementById('codeModal');
const codeModalImage = document.getElementById('codeModalImage');
const codeModalClose = document.querySelector('.code-modal-close');
const codeTriggers = document.querySelectorAll('.code-preview-trigger');

codeTriggers.forEach(trigger => {
    trigger.addEventListener('click', (event) => {
        event.preventDefault();
        codeModalImage.src = codeImages[trigger.dataset.code];
        codeModalImage.alt = trigger.dataset.alt;
        codeModal.classList.add('is-active');
    });
});

function closeCodeModal() {
    codeModal.classList.remove('is-active');
    codeModalImage.src = '';
}

codeModalClose.addEventListener('click', closeCodeModal);
codeModal.addEventListener('click', (event) => {
    if (event.target === codeModal) closeCodeModal();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && codeModal.classList.contains('is-active')) {
        closeCodeModal();
    }
});