import React, { Component } from "react";
import moment from "moment";
import WeekBoxes from "./components/weekBoxes";
import WeeksForm from "./components/weeksForm";
import Results from "./components/results";
import "./App.css";

class App extends Component {
  state = {
    weekBoxes: [],
    formFields: { birthDate: moment() },
    data: { averageLifeSpanYears: 90, noWeeks: 0 },
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  // when form is submitted
  handleSubmit = (submittedForm) => {
    let formFields = this.state.formFields;
    formFields.birthDate = submittedForm.birthDate;
    this.setState({ formFields: formFields, weekBoxes: this.state.weekBoxes });
    this.calculateNoWeeks(this.state.formFields.birthDate);
    this.updateWeekBoxes();
  };

  //calculate the number of weeks between now and the birth date
  calculateNoWeeks = (date) => {
    const birthDate = moment(date);
    const difference = birthDate.diff(moment());
    const diffDuration = moment.duration(difference);

    let noWeeks = 0;

    if (date !== undefined) {
      noWeeks = parseInt(diffDuration.asWeeks()) * -1;
    }

    // update state
    let data = this.state.data;
    data.noWeeks = noWeeks;
    this.setState({ data });
  };

  // create array of boxes
  updateWeekBoxes = () => {
    let weekBoxes = [];
    const averageLifeSpanWeeks = this.state.data.averageLifeSpanYears * 52;

    for (let index = 0; index < averageLifeSpanWeeks; index++) {
      let checked = 0;

      if (index <= this.state.data.noWeeks) {
        checked = 1;
      }

      weekBoxes.push({ id: index, checked: checked });
    }

    this.setState({ weekBoxes: weekBoxes, formFields: this.state.formFields });
  };

  render() {
    console.log("App - Rendered");
    return (
      <main className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Lifetime Weeks</h1>
            <hr />
            <WeeksForm
              formFields={this.state.formFields}
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>

        <Results data={this.state.data} />
        <WeekBoxes weekBoxes={this.state.weekBoxes} />
      </main>
    );
  }
}

export default App;
