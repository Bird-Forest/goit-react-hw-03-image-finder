import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100%;
  height: 100%;
  background-color: aqua;
  /* background-color: rgba(46, 47, 66, 0.4); */
`;
export const ModalWrap = styled.div`
  position: absolute;
  width: 100%;
  max-width: 550px;
  height: 100%;
  max-height: 400px;
  background-color: white;
  border-radius: 10px;
  padding: 25px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: yellow;
`;
export const ModalImg = styled.img`
  display: block;
  width: 100%;
  max-width: 550px;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  background-color: red;
`;
