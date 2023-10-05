import React from 'react';
import { nanoid } from 'nanoid';
import { FotoWrap, FotoItem } from './ImageGalleryItem.styled';

export const Foto = ({ id, webURL, tags, largeURL, showModalBigImg }) => {
  return (
    <FotoWrap key={nanoid()} id={id}>
      <FotoItem
        src={webURL}
        alt={tags}
        // name={largeURL}
        onClick={() => {
          showModalBigImg(largeURL);
        }}
      />
    </FotoWrap>
  );
};
