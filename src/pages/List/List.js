import React, { Component } from 'react';
import { MdCached } from "react-icons/md";

import { Container, ListTodos, ItemTodo } from './styles';
import { api } from '../../services/api'

export default class List extends Component {
  state = {
    todos: [],
    loading: false,
  }

  async componentDidMount() {
    const request = await api.get('todos')

    this.setState({
      todos: request.data
    })
  }

  async handleDelete(e) {
    const { todos } = this.state
    const id = e.target.id
    this.setState({
      loading: true
    })

    await api.delete(`todos/${id}`)

    const newList = todos.filter(todo => {
      return todo.id !== parseInt(id)
    })

    this.setState({
      todos: newList,
      loading: false
    })
  }

  render() {
    const { todos, loading } = this.state

    return (
      <Container>
        <ListTodos>
          {
            todos.map(todo => (
              <ItemTodo key={todo.id}>
                <span>{todo.title}</span>
                <button type='button' id={todo.id} disabled={loading} onClick={(e) => this.handleDelete(e)}>{loading ? <MdCached size={14} color="#FFF" /> : 'x'}</button>
              </ItemTodo>
            ))
          }
        </ListTodos>
      </Container>
    );
  }
}
