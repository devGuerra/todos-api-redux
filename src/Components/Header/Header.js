import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Header, Button } from "./styles";

function HeaderComponent({ add }) {
  return (
    <Header>
      <Link to="/">
        <Button type="button">Home</Button>
      </Link>
      <Link to="/add">
        <Button type="button">Adicionar</Button>
      </Link>
    </Header>
  );
}
export default connect(state => ({
  add: state.add
}))(HeaderComponent);
