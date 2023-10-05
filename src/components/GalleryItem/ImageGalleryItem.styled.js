import { styled } from 'styled-components';
export const FotoWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 300px;

  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;

  margin: 0;
  @media screen and (min-width: 650px) {
    flex-basis: calc((100% - 4 * 10px) / 2);
    width: 100%;
  }

  @media screen and (min-width: 1310px) {
    flex-basis: calc((100% - 8 * 10px) / 4);
  }
`;
export const FotoItem = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
