import styled from "styled-components";

export const NoteList = styled.li`
  list-style-type: none;
  font-family: ${(props) => (props.primary ? "Noto Serif" : "Roboto")};
  font-style: normal;
  font-weight: ${(props) => (props.primary ? "bold" : "normal")};
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.1em;
  color: #5b5b5b;
  margin-bottom: 10px;
`;

export const NoteListDiv = styled.div`
  max-width: 900px;
  max-heigth: 250px;
  padding: 20px 60px;
  border-bottom: 1px solid #000000;
`;
