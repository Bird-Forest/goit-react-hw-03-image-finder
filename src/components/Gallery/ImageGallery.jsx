import React from 'react';
import { nanoid } from 'nanoid';
import { GalleryWrap } from './ImageGallery.styled';
// import { FotoWrap, FotoItem } from '../GalleryItem/ImageGalleryItem.styled';
import { Foto } from 'components/GalleryItem/ImageGalleryItem';

export function CreateGalleryFotos({ gallery, showModal }) {
  if (gallery) {
    return (
      <GalleryWrap>
        {gallery.hits.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <Foto
              key={nanoid()}
              id={id}
              webURL={webformatURL}
              tags={tags}
              largeURL={largeImageURL}
              showModalBigImg={showModal}
            />
          );
        })}
      </GalleryWrap>
    );
  }
}
