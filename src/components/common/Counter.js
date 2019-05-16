import React from "react";
import Button from "./Button";

export default class Counter extends React.Component {
  render() {
    const btnStyle = {
      margin: "0px",
      padding: "0px",
      height: "18px",
      fontSize: "10px"
    };

    return (
      <>
        <div style={{ padding: "0px 5px 5px 5px" }}>
          <span
            style={{
              fontSize: "1.4em",
              position: "relative",
              top: "12px",
              paddingRight: "7px"
            }}
          >
            {this.props.count}
          </span>
          <span style={{ display: "inline-flex", flexDirection: "column" }}>
            <Button
              onClick={this.props.increaseCount}
              style={btnStyle}
              text="&and;"
            />
            <Button
              onClick={this.props.decreaseCount}
              style={btnStyle}
              text="&or;"
            />
          </span>
        </div>
      </>
    );
  }
}
