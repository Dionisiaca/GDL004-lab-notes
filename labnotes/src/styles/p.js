import styled from "styled-components";

export default styled.p`
  font-family: ${(props) => (props.primary ? "Noto Serif" : "Roboto")}
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  letter-spacing: 0.1em;
  color: #5b5b5b;
`;
