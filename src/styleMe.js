import React from "react";
import ReactDOM from "react-dom";

export default class styleMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Frarthur" };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ background: "lightblue", color: "darkred" }}>
          Please style me! I am so bland!
        </h1>
      </div>
    );
  }
}
