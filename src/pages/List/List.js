import React from "react";
import { MdCached } from "react-icons/md";
import { connect } from "react-redux";

import { Container, ListTodos, ItemTodo } from "./styles";

function List({ add }) {
  console.log(add);
  return (
    <Container>
      <ListTodos>
        {add.map(add => (
          <ItemTodo key={Math.random()}>
            <span>{add}</span>
            <button
              type="button"
              id={add}
              disabled={false}
              onClick={e => this.handleDelete(e)}
            >
              {false ? <MdCached size={14} color="#FFF" /> : "x"}
            </button>
          </ItemTodo>
        ))}
      </ListTodos>
    </Container>
  );
}

export default connect(state => ({
  add: state.add
}))(List);
