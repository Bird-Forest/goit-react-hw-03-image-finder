import React from 'react';
import { nanoid } from 'nanoid';
import { GalleryWrap } from './ImageGallery.styled';
import { Foto } from 'components/GalleryItem/ImageGalleryItem';

export function CreateGalleryFotos({ hits, showModal }) {
  const showFotos = Array.isArray(hits) && hits.length;

  return (
    <GalleryWrap>
      {showFotos &&
        hits.map(({ id, webformatURL, tags, largeImageURL }) => {
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
