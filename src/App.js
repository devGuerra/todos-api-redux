import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/globals";

import Routes from "./Routes";
import HeaderComponent from "./Components/Header/Header";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderComponent />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
