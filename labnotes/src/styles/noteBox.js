import styled from "styled-components";

export default styled.textarea`
  width: 739px;
  height: ${(props) => (props.primary ? "70px" : "621px")};
  font-family: ${(props) => (props.primary ? "Noto Serif" : "Roboto")};
  font-style: normal;
  font-weight: ${(props) => (props.primary ? "bold" : "normal")};
  font-size: ${(props) => (props.primary ? "48px" : "30px")};
  line-height: ${(props) => (props.primary ? "65px" : "35px")};
  letter-spacing: 0.1em;
  color: #5b5b5b;
  background-color: transparent;
  border: none;
  padding: 10px;
  margin: 30px 60px 0px 60px;
`;
