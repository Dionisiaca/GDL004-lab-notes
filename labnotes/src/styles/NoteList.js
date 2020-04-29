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

export const NoteDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid #000000;
  display: flex;
  align-items: center;
`;

export const NoteContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem 1rem 5rem;
  width: 650px;
`;

export const EditIcons = styled.img`
  width: 35px;
`;

export const EditNoteDiv = styled.div`
  width: 126px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
