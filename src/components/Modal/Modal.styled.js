import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.5);
`;
export const ModalWrap = styled.div`
  position: absolute;
  width: 320px;

  height: 320px;
  background-color: white;
  border-radius: 10px;
  padding: 2px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 650px) {
    width: 630px;
    height: 450px;
  }

  @media screen and (min-width: 1310px) {
    width: 900px;
    height: 600px;
  }
`;
export const ModalImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
