import { galleryItems } from "./gallery-items.js";
// Change code below this line

const $gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  $gallery.insertAdjacentHTML("beforeend", `<a></a>`);
  let $a = $gallery.lastChild;
  $a.classList.add("gallery__link");
  $a.href = galleryItems[i].original;
}

const $a = $gallery.querySelectorAll("a");
let counter = 0;

for (const a of $a) {
  a.insertAdjacentHTML("beforeend", "<img/>");
  let img = a.lastChild;
  img.classList.add("gallery__image");
  img.src = `${galleryItems[counter].preview}`;
  img.dataset.source = `${galleryItems[counter].original}`;
  img.alt = `${galleryItems[counter].description}`;
  a.addEventListener("click", (event) => {
    event.preventDefault();
  });
  counter++;
}

$gallery.onclick = (event) => {
  if (event.target.tagName !== "IMG") {
    return;
  }
  basicLightbox
    .create(
      `
    <img width="1280" src = ${event.target.dataset.source}>
  `
    )
    .show();
};
