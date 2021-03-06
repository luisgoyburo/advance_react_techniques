import React from "react";

const blue = "rgb(139, 157, 195)";
const darkBlue = "rgb(059, 089, 152)";
const lightBlue = "rgb(223, 227, 238)";
const grey = "rgb(247, 247, 247)";
const white = "rgb(255, 255, 255)";

const styles = {
  blue: blue,
  darkBlue: darkBlue,
  lightBlue: lightBlue,
  grey: grey,
  white: white,
};

let divStyle = {
  backgroundColor: styles.darkBlue,
  color: styles.white,
};

export default class Wow extends React.Component {
  render() {
    return <div style={divStyle}>Wow, I stole these colors from Facebook!</div>;
  }
}
