import { styled } from 'styled-components';
export const BtnLoadMore = styled.button`
  position: fixed;
  /* align-items: center; */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 80;
  display: inline-block;
  width: 300px;
  height: 40px;

  font-size: 16px;
  font-weight: 400;

  color: white;
  background-color: #2373a9;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  border: 2px #216b9dcb solid;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  outline: none;
  border-radius: 8px;
  cursor: pointer;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5px;
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;
