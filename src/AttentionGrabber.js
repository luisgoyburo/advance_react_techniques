import React from "react";
//import styles from "./styles";

const styles = {
  fontFamily: "arial",
  background: "red",
  fontSize: 16,
  padding: 10,
  color: "blue",
};

const h1Style = {
  color: styles.color,
  fontSize: styles.fontSize,
  fontFamily: styles.fontFamily,
  padding: styles.padding,
  margin: 0,
};

export default class AttentionGrabber extends React.Component {
  render() {
    return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
  }
}
