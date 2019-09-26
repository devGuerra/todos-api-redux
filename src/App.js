import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "./redux/actions";

class App extends Component {
  state = {
    todos: ""
  };

  handleChange = e => {
    this.setState({
      todos: e.target.value
    });
  };

  componentDidUpdate = e => {
    console.log(this.props)
  }

  render() {
    const { addTodo, removeTodo } = this.props;
    const { todos } = this.state;

    return (
      <div className="App" style={{ paddingTop: "10px" }}>
        <input onChange={this.handleChange} type="text" value={todos} />
        <button onClick={() => addTodo(todos)}>Click me!</button>
        <h1>{todos}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  todos: store.addTodo.todos
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
