import styled from "styled-components";

export const Header = styled.h1`
  width: 382px;
  font-family: Roboto;
  font-weight: 300;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 0.2em;
  text-align: left;
  color: #5b5b5b;
  margin-left: 5rem;
`;

export const Input = styled.input`
  width: 500px;
  font-family: Roboto;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.1em;
  color: #8a8a8a;
  background-color: transparent;
  border: none;
  border-bottom: solid 2px #8a8a8a;
  margin-left: 5rem;
`;

export const Button = styled.button`
  width: 300px;
  height: 123px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  letter-spacing: 0.1em;
  color: ${(props) => (props.primary ? "black" : "#8A8A8A")};
  background: ${(props) => (props.primary ? "#d8f642" : "transparent")};
  border-radius: 60px;
  border: none;
  margin: 20px 20px 20px 0px;
  &: hover {
    background: black;
    color: #ffffff;
  }
`;

export const Div = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: #f5edf0;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ButtonsDiv = styled.div`
  width: 700px;
  display: flex;
  margin-left: 5rem;
  margin-top: 3rem;
`;

export const P = styled.p`
  font-family: ${(props) => (props.primary ? "Noto Serif" : "Roboto")}
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  letter-spacing: 0.1em;
  color: #5b5b5b;
  margin-left: 5rem;
`;
