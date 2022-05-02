import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryDiv = document.querySelector('.gallery');

const img = galleryItems
  .map(element => {
    const { original, preview, description } = element;
    return `<a class='gallery__item' href=${original}>
          <img
            class='gallery__image'
            src=${preview}
            alt=${description}
          />
        </a>`;
  })
  .join('');

galleryDiv.innerHTML = img;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: '250ms',
});
