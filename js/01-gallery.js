import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryItemsRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryItemsRef.addEventListener('click', onGalleryImageClick);

function createGalleryItemsMarkup (items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`
    }).join('');
}

function onGalleryImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(evt.target.dataset.source); 
    
    const originalSrc = evt.target.dataset.source;

    const modal = basicLightbox.create(`<img src="${originalSrc}">`)
    modal.show();
}

