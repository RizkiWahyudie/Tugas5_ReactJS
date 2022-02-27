import React, { Component } from "react";
import FormMakanan from "./Form/FormMakanan";
import MenuMakanan from "./Page/MenuMakanan";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <MenuMakanan />
        <FormMakanan />
      </div>
    )
  }
}

export default App;
