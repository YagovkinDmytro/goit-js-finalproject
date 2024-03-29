import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", galleryPictures(galleryItems));

const galleryModal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

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
