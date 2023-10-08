import React from 'react';
import { LoaderWrap, Loader } from './loader.styled';

export function Loading() {
  return (
    <LoaderWrap>
      <Loader />
    </LoaderWrap>
  );
}
