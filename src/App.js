import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import TravelsList from "./components/TravelsList";
import "./styles/App.sass";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TravelsList></TravelsList>
        </div> 
      </Provider>
    );
  }
}

export default App;
