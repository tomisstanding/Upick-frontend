import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { browserHistory } from "react-router";
import DatePicker from "react-datepicker";
import moment from "moment";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      date: 'today',
      keywords: '',
      startDate: moment().format('l'),
      placeholderText: 'select a date'
    };
  }

  handleChange(event){
    this.setState({
      city: event.target.value,
      date: event.target.value,
      keywords: event.target.value
    })
  }

  handleDateChange(date) {
    console.log(date._d)
    this.setState({
      startDate: date,
      placeholderText: date._d
    })
  }

  handlePlaceholderChange() {
    if (this.state.placeholderUpdate === 'false') {
      return 'false'
    } else {
      return 'true'
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    browserHistory.push(`/events?keywords=${this.state.keywords}&location=${this.state.city}&date=${this.state.date}`);
  }

  render() {
    return (
      <div>
        <div className="bg-img"></div>
        <div className="overlay"></div>
        <Nav />
        <div className="homepage-container">
          <h1>What do you want to do today?</h1>

          <div>
            <DatePicker
              className="date-picker"
              onChange={this.handleDateChange.bind(this)}
              placeholderText={this.state.placeholderText}
              name="date"
            />
          </div>

          <input
            onChange={event => this.setState({city: event.target.value})}
            value={this.state.city}
            className="city-input"
            placeholder="enter a location"
            name="city"
          />

          <input
            onChange={event => this.setState({keywords: event.target.value})}
            value={this.state.keywords}
            className="category-input"
            placeholder="Category: ex. 'Movies' "
            name="keywords"
          />

          <button
            className="outline-btn"
            onClick={this.handleSubmit.bind(this)}>
            Pïck
          </button>
        </div>

        <div className="video">
          <iframe
            src="https://player.vimeo.com/video/61659572?autoplay=1&loop=1&title=0&byline=0&portrait=0"
            width="1920"
            height="1280">
          </iframe>
        <div className="overlay"></div>
        </div>
      </div>
    )
  }
}

export default Homepage;
