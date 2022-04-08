import { galleryItems } from "./gallery-items.js";
// Change code below this line

const $gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  $gallery.insertAdjacentHTML("beforeend", `<a></a>`);
  let $a = $gallery.lastChild;
  $a.classList.add("gallery__item");
  $a.href = galleryItems[i].original;
}

const $a = $gallery.querySelectorAll("a");
let counter = 0;

for (const a of $a) {
  a.insertAdjacentHTML("beforeend", "<img/>");
  let img = a.lastChild;
  img.classList.add("gallery__image");
  img.src = `${galleryItems[counter].preview}`;
  img.alt = `${galleryItems[counter].description}`;
  a.addEventListener("click", (event) => {
    event.preventDefault();
  });
  counter++;
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
