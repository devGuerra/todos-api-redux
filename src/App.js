import React from "react";
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/globals'

import Routes from './Routes'
import Header from './Components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );

}

export default App
