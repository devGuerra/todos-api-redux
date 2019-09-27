import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px 20px;
  color: #fff;
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
