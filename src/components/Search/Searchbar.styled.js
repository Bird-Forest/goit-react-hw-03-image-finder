import { styled } from 'styled-components';
export const Heder = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  background: #82bcce;
  background: linear-gradient(to bottom, #82bcce 0%, #1c6ea4 0%, #82bcce 100%);

  width: 100%;
  height: 60px;

  padding: 0;
`;
export const FormSearch = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 350px;
  height: 45px;
  margin: 0 auto;
  padding: 0;
`;
export const BtnSearch = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #2373a9;
  background-image: url(./images/icons8-поиск-в-облаке-64.png);
  background-size: cover;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  border: 2px #216b9dcb solid;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  outline: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    transform: scale(1.04);
  }
  .icon {
    width: 36px;
    height: 36px;
    stroke: white;
  }
`;
export const InputSearch = styled.input`
  width: 270px;
  height: 35px;
  border: 2px #216b9dcb solid;
  font-size: 16px;
  outline: none;
  /* border: none; */
  border-radius: 8px;
  padding-left: 10px;
`;
