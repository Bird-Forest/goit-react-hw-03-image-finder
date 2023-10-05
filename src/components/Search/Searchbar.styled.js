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

  padding-top: 10px;
  padding-bottom: 10px;
`;
export const FormSearch = styled.form`
  width: 300px;
  height: 80px;
`;
export const BtnSearch = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #2373a9;
  background-image: url(./images/icons8-поиск-в-облаке-64.png);
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
  border: 3px #216b9dcb solid;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  outline: none;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-left: 10px;

  .icon {
    fill: white;
  }
`;
export const InputSearch = styled.input`
  width: 300px;
  height: 50px;

  font-size: 20px;

  outline: none;
  border: none;
  border-radius: 5px;

  padding-left: 15px;
`;
