import React, { Component } from "react";

class weeksForm extends Component {
  constructor() {
    super();
    this.state = { formFields: { birthDate: "1992-06-22" } };
  }

  changeDateHandler = (event) => {
    this.setState({ formFields: { birthDate: event.target.value } });
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.formFields);
  };

  render() {
    return (
      <form className="form-inline row" onSubmit={this.mySubmitHandler}>
        <div className="form-group">
          <label htmlFor="birthDate" className="col-sm-5 col-form-label">
            When's ya birthday, cunt?
          </label>
          <input
            type="date"
            className="form-control col-sm3"
            id="birthDate"
            value={this.state.formFields.birthDate}
            onChange={this.changeDateHandler}
          />
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary">
              Go bitch
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default weeksForm;
