const previewButton = document.querySelector('.button-preview');
const previewButtonIcon = document.querySelector('.button-preview img');
const previewImage = document.querySelector('.preview-image');

const startPreviewIconPath = './assets/icons/360.svg';
const closePreviewIconPath = './assets/icons/close.svg';

const staticPreviewImagePath = './assets/preview/Sofa_boraCodar.png'
const RotatingPreviewImagePath = './assets/preview/Sofa_boraCodar.gif'

let isRotating = false;

function changePreview() {
    isRotating = !isRotating;

    previewImage.setAttribute('src', isRotating ? RotatingPreviewImagePath : staticPreviewImagePath)
    previewButtonIcon.setAttribute('src', isRotating ? closePreviewIconPath : startPreviewIconPath)
}

previewButton.addEventListener('click', changePreview)