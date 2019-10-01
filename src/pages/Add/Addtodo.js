import React, { Component } from "react";
import { connect } from "react-redux";

import { Container } from "./styles";
// import { api } from '../../services/api'

class Add extends Component {
  state = {
    title: '',
    completed: false

  };

  handleChange(e) {
    if (e.target.type === 'textarea') {
      this.setState({
        title: e.target.value,
      });
    } else {
      this.setState({
        completed: e.target.checked,
      });
    }
  }

  addTodo = () => {
    const { dispatch } = this.props;
    const todo = this.state

    if (!todo.title) return

    dispatch({
      type: "ADD_TODO",
      todo
    });

    this.setState({
      title: '',
      completed: false
    });
  };

  render() {
    const { title, completed } = this.state
    return (
      <Container>
        <textarea
          onChange={e => this.handleChange(e)}
          type="text"
          value={title}
        />
        <div>
          <input type="checkbox" value={completed} onChange={() => this.handleChange} />
          <span>Completed</span>
        </div>
        <button onClick={() => this.addTodo()} type="button">
          Gravar
        </button>
      </Container>
    );
  }
}

export default connect()(Add);

