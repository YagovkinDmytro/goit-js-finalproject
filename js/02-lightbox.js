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
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");
}

gallery.insertAdjacentHTML("afterbegin", galleryPictures(galleryItems));

gallery.addEventListener("click", handlerPictureClick);

function handlerPictureClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  galleryModal;
}

const galleryModal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
