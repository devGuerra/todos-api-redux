import styled from "styled-components";

export const Container = styled.div``;
export const ListTodos = styled.ul`
  list-style: none;
`;
export const ItemTodo = styled.li`
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  background: #7159c1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &:first-child {
    margin-top: 0;
  }

  button {
    background: none;
    border: 0;

    > * {
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      50% {
        transform: rotate(180deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
