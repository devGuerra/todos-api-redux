import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    font-size: 18px;
    height: 4em;
    padding: 5px;
    border-radius: 4px;
    border: 0;
    resize: none;
  }

  button {
    border: 0;
    border-radius: 4px;
    background: #7159c1;
    color: #fff;
    font-size: 18px;
    padding: 5px 0;
    margin-top: 10px;
  }
`;
