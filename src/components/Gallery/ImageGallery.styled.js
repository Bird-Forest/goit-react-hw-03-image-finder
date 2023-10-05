import { styled } from 'styled-components';
export const GalleryWrap = styled.ul`
  position: absolute;
  /* top: 70; */
  right: 0;
  left: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;

  min-width: 320px;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0 60px 0;
  @media screen and (min-width: 650px) {
    width: 760px;
  }

  @media screen and (min-width: 1310px) {
    width: 1440px;
  }
`;
