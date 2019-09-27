import React, { Component } from "react";
import { connect } from "react-redux";

import { Container } from "./styles";
// import { api } from '../../services/api'

class Add extends Component {
  state = {
    todo: ""
  };
  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  addTodo = todo => {
    const { dispatch } = this.props;

    dispatch({
      type: "ADD_TODO",
      todo
    });

    this.setState({
      todo: ""
    });
  };
  render() {
    const { todo } = this.state;
    return (
      <Container>
        <textarea
          onChange={e => this.handleChange(e)}
          type="text"
          value={todo}
        />
        <button onClick={() => this.addTodo(todo)} type="button">
          Gravar
        </button>
      </Container>
    );
  }
}

export default connect()(Add);
