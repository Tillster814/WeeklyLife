import React, { Component } from "react";

class WeekBox extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={this.getClasses()}></div>
      </React.Fragment>
    );
  }

  getClasses() {
    return "weekBox " + "weekBox-color-" + this.props.weekBox.color;
  }
}

export default WeekBox;
