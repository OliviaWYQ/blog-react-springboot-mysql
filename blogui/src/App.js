import React, { Component } from 'react';
import { GlobalStyle } from "./style";
import Header from "./common/header/index";
import List from "./pages/home/components/List";

class App extends Component {
  render() {
    return ( 
      <div>
        < GlobalStyle / >
        < Header />
      </div>
    );
  }
}

export default App;
