import images from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const lightbox = document.querySelector('.js-lightbox');
const modalWindow = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const backDrop = document.querySelector('.lightbox__content');

const createGallery = (image) => {
    const galleryItemRef = document.createElement("li");
    galleryItemRef.classList.add('gallery__item');

    const galleryLinkRef = document.createElement("a");
    galleryLinkRef.classList.add("gallety__link");
    galleryLinkRef.href = image.original;

    const galleryImageRef = document.createElement('img');
    galleryImageRef.classList.add("gallery__image");
    galleryImageRef.src = image.preview;
    galleryImageRef.dataset.source = image.original;
    galleryImageRef.alt = image.description;

    galleryLinkRef.appendChild(galleryImageRef);
    galleryItemRef.appendChild(galleryLinkRef);

    return galleryItemRef;
};

const galleryCards = images.map((image) => createGallery(image));
galleryRef.append(...galleryCards);

const onImageClick = (event) => {
    if (event.target.nodeName !== "UL") {
        event.preventDefault();
        onOpenModal();
        return;
    }
};

const onOpenModal = () => {
    window.addEventListener('keydown', onPressEscape);
    lightbox.classList.add('is-open');
    modalWindow.src = event.target.dataset.source;
};

const onCloseModal = () => {
    window.removeEventListener('keydown', onPressEscape);
    lightbox.classList.remove('is-open');
    modalWindow.src = '';
};

const onPressEscape = (event) => {
    if (event.code === 'Escape') {
        onCloseModal();
    }
}

const onBackDropClick = (event) => {
    if (event.target === event.currentTarget) {
        onCloseModal();
    }
}

galleryRef.addEventListener('click', onImageClick);
closeModalBtn.addEventListener('click', onCloseModal);
backDrop.addEventListener('click', onBackDropClick);