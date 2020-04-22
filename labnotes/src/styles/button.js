import styled from "styled-components";

export default styled.button`
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
  &: hover {
    background: black;
    color: #ffffff;
  }
`;
