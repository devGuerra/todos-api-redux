import React from 'react';
import { Link } from 'react-router-dom'

import { Header, Button } from './styles';

export default function Components() {
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
