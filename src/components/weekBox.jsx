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
    let classes = "weekBox";
    classes += this.props.weekBox.checked ? " checked" : "";
    return classes;
  }
}

export default WeekBox;
