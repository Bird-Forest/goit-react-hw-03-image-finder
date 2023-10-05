import { styled } from 'styled-components';
export const FotoWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 360px;

  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;

  margin: 0;
`;
export const FotoItem = styled.img`
  display: block;

  width: 100%;
  height: 290px;

  object-fit: cover;
`;
