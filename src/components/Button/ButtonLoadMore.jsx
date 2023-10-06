import React from 'react';
import { BtnLoadMore } from './Button.styled';
export const ButtonLoadMore = ({ nextPage }) => {
  return (
    <BtnLoadMore type="button" onClick={() => nextPage()}>
      Load more
    </BtnLoadMore>
  );
};
