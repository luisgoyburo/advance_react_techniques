import React from "react";
import ReactDOM from "react-dom";
import AttentionGrabber from "./AttentionGrabber";
//import { styles } from "./styles";
import Wow from "./FacebookColorThief";

const divStyle = {
  background: "white",
  height: "100%",
};

export default class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <Wow />
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}
