import styled from "styled-components";

export default styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: ${(props) => (props.primary ? "center" : "space-around")};
  background-color: #f5edf0;
  padding-left: 100px;
`;
