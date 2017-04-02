import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { browserHistory } from "react-router";


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
  }

  handleChange(event){
    this.setState({
      city: event.target.value
    })
  };

  handleSubmit(event) {
    event.preventDefault();

    window.localStorage.setItem("city", this.state.city)
    browserHistory.push('/events');
  }

  render() {
    return (
      <div>
        <div className="bg-img"></div>
        <div className="overlay"></div>
        <Nav />
        <div className="homepage-container">
          <h1>Where are you going to explore today?</h1>
            <input
              onChange={this.handleChange.bind(this)}
              className="input"
              placeholder="enter a location"
              name="city"
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
            height="1080">
          </iframe>
        <div className="overlay"></div>
        </div>
      </div>
    )
  }
}

export default Homepage;
