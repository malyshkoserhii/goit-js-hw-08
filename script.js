import images from "./gallery-items.js";

const createGallery = (image) => {
    const galleryItemRef = document.createElement("li");
    galleryItemRef.classList.add('gallery__item');

    const galleryLinkRef = document.createElement("a");
    galleryLinkRef.classList.add("gallety__link");
    galleryLinkRef.href = image.original;

    const galleryImageRef = document.createElement('img');
    galleryImageRef.classList.add("gallery__image");
    galleryImageRef.src = image.preview;
    galleryImageRef.alt = image.description;

    galleryLinkRef.appendChild(galleryImageRef);
    galleryItemRef.appendChild(galleryLinkRef);

    return galleryItemRef;
};

const galleryCards = images.map((image) => createGallery(image));

const galleryRef = document.querySelector(".js-gallery");

galleryRef.append(...galleryCards);