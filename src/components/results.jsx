import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <label className="col-sm-5 col-form-label">
            You were born {this.props.data.noWeeks} weeks ago
          </label>
        </div>
        <div className="row">
          <label className="col-sm-5 col-form-label">
            You have{" "}
            {this.props.data.averageLifeSpanYears * 52 -
              this.props.data.noWeeks}{" "}
            weeks left (if you live to 90)
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default Results;
