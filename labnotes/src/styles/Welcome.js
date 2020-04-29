import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: #d8f642;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const H2 = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #000000;
`;

export const P = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #5b5b5b;
`;

export const Button = styled.button`
  width: 435px;
  height: 123px;
  text-align: center;
  background-color: black;
  padding: 5% 8%;
  margin-top: 1em;
  font-family: Roboto;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
  border-radius: 60px;
  border: none;
  &:hover {
    background: white;
    color: #d8f642;
  }
`;

/*@media (min-width: 800px) {
    width: 200px;
    height: 60px;
    font-size: 24px;
    line-heigth: 24px;
    padding: 0px;
  }


  @media (min-width: 800px) {
    font-size: 16px;
  }*/
