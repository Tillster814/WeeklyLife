import React, { Component } from "react";
import WeekBox from "./weekBox";

class WeekBoxes extends Component {
  render() {
    const { weekBoxes } = this.props;
    return (
      <div className="weekBoxes">
        {weekBoxes.map((weekBox) => (
          <WeekBox key={weekBox.id} weekBox={weekBox} />
        ))}
      </div>
    );
  }
}

export default WeekBoxes;
