import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f5edf0;
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const Icons = styled.img`
  width: 65px;
  height: 65px;
`;
