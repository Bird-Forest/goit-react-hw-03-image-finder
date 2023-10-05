import { styled } from 'styled-components';
export const BtnLoadMore = styled.button`
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: block;
  width: 80px;
  height: 50px;

  font-size: 16px;
  font-weight: 400;

  color: white;
  background-color: #2373a9;
  border: 2px #216b9dcb solid;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  outline: none;
  border-radius: 5px;
  cursor: pointer;

  padding-top: 0;
  margin-right: auto;
  & :hover,
  & :focus {
    transform: scale(1.05);
  }
  .hidden {
    display: none;
  }
`;
