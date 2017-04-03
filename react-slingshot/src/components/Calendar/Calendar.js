import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

var Example = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },

  render: function() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />;
  }
});


class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calendar">

      </div>
    )
  }
}

export default Calendar;
