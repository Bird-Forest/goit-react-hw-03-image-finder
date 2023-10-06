import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrap } from './loader.styled';

export function LoaderThreeDots() {
  return (
    <LoaderWrap>
      <ThreeDots className="loader" ariaLabel="three-dots-loading" />
    </LoaderWrap>
  );
}
