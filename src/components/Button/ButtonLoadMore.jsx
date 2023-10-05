import React from 'react';
import { BtnLoadMore } from './Button.styled';
export const ButtonLoadMore = ({ onPageIncrement }) => {
  return (
    <BtnLoadMore type="button" onClick={() => onPageIncrement()}>
      Load more
    </BtnLoadMore>
  );
};
