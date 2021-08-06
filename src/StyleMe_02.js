import React from "react";

export default class StyleMe_02 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: {
        background: "lightblue",
        color: "darkred",
        marginTop: "100px",
        fontSize: "50px",
      },
    };
  }
  render() {
    return (
      <div>
        <h1 style={this.state.styles}>Please style me! I am so bland!</h1>
      </div>
    );
  }
}
