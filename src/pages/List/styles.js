import styled from "styled-components";

export const Container = styled.div``;
export const ListTodos = styled.ul`
  list-style: none;
`;
export const ItemTodo = styled.li.attrs(props => ({
  background: props.completed ? '#fff' : '#7159c1'
}))`

  main {
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    background: ${props => props.background};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &:first-child {
    margin-top: 0;
  }

  button {
    background: none;
    border: 0;
    color: #fff;
  }
`;
