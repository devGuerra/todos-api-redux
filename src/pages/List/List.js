import React, { Component } from "react";
import { MdCached } from "react-icons/md";
import { connect } from "react-redux";

// import { api } from '../../services/api'
import { Container, ListTodos, ItemTodo } from "./styles";

class List extends Component {
  handleDelete = todo => {
    const { dispatch } = this.props
    dispatch({
      type: 'REMOVE_TODO',
      todo
    })
  }

  render() {
    const { todos } = this.props
    return (
      <Container>
        <ListTodos>
          {
            todos.map((todo) => (
              <ItemTodo key={todo.id} completed={todo.completed}>
                <main>
                  <span>{todo.value}</span>
                  <button
                    type="button"
                    id={todo.id}
                    disabled={false}
                    onClick={e => this.handleDelete(e.target.id)}
                  >
                    {false ? <MdCached size={14} color="#FFF" /> : "x"}
                  </button>
                </main>

              </ItemTodo>
            ))
          }
        </ListTodos>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(List);
