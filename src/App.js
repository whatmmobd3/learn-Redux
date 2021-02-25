import React from "react";
import "./App.css";

import Create from "./components/Create/Create";
import People from "./components/People/People";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Create />
        <People />
      </div>
    );
  }
}

export default App;
