import images from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const modalWindow = document.querySelector(".lightbox__image");
const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const backDrop = document.querySelector(".lightbox__content");

let activeIndex;

const createGallery = (image) => {
  const galleryItemRef = document.createElement("li");
  galleryItemRef.classList.add("gallery__item");

  const galleryLinkRef = document.createElement("a");
  galleryLinkRef.classList.add("gallety__link");
  galleryLinkRef.href = image.original;

  const galleryImageRef = document.createElement("img");
  galleryImageRef.classList.add("gallery__image");
  galleryImageRef.src = image.preview;
  galleryImageRef.dataset.source = image.original;
  galleryImageRef.dataset.index = image.index;
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
  window.addEventListener("keydown", onPressEscape);
  lightbox.classList.add("is-open");
  modalWindow.src = event.target.dataset.source;

  activeIndex = Number(event.target.dataset.index);
  console.log("activeIndex: ", activeIndex);
  console.log("curentPictureSource: ", event.target.dataset.source);
  // const activeImage = images.map(function (element, index, arr) {

  // });
};

const onCloseModal = () => {
  window.removeEventListener("keydown", onPressEscape);
  lightbox.classList.remove("is-open");
  modalWindow.src = "";
};

const onPressEscape = (event) => {
  if (event.code === "Escape") {
    onCloseModal();
  }
};

const onBackDropClick = (event) => {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
};

const onRightBtnClick = (event) => {
  if (event.code === "ArrowRight") {
    activeIndex += 1;
    const activeImage = images.map(function (image, index, arr) {
      return (modalWindow.src = arr[index].original);
    });
    console.log(activeIndex);
  }
};

const onLeftClick = (event) => {
  if (event.code === "ArrowLeft") {
    activeIndex -= 1;
    console.log(activeIndex);
  }
};

galleryRef.addEventListener("click", onImageClick);

galleryRef.addEventListener("keydown", onRightBtnClick);
galleryRef.addEventListener("keydown", onLeftClick);

closeModalBtn.addEventListener("click", onCloseModal);
backDrop.addEventListener("click", onBackDropClick);
