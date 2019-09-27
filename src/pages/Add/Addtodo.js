import React, { Component } from 'react';

import { Container } from './styles';
import { api } from '../../services/api'

export default class Add extends Component {
  state = {
    todo: ''
  }
  handleChange(e) {
    this.setState({
      todo: e.target.value
    })
  }

  async addTodo() {
    const { todo } = this.state
    await api.post('/todos', {
      title: todo,
      userId: 1
    })

    this.setState({
      todo: ""
    })
  }
  render() {
    const { todo } = this.state
    return (
      <Container>
        <textarea onChange={(e) => this.handleChange(e)} type="text" value={todo} />
        <button onClick={() => this.addTodo()} type="button">Gravar</button>
      </Container >
    );
  }
}
