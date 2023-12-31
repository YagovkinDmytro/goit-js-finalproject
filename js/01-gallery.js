import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

function galleryPictures(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");
}

gallery.innerHTML = galleryPictures(galleryItems);

gallery.addEventListener("click", handlerPictureClick);

function handlerPictureClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const value = evt.target.dataset.source;

  showPictureModal(value);
}

function showPictureModal(link) {
  const instance = basicLightbox.create(
    `<img src="${link}" width="800" height="600">`,
    {
      handler: null,
      onShow(instance) {
        this.handler = onEscape.bind(instance);
        document.addEventListener("keydown", this.handler);
      },
      onClose() {
        document.removeEventListener("keydown", this.handler);
      },
    }
  );
  instance.show();
}

function onEscape({ code }) {
  if (code === "Escape") {
    this.close();
  }
}
