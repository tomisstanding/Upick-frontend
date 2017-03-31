import React, { Component } from "react";
import { Link } from "react-router";
import Nav from "../Nav/Nav";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A city was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="bg-img"></div>
        <div className="overlay"></div>
        <Nav />
        <div className="homepage-container">
          <h1>Where are you going to explore today?</h1>
            <form onSubmit={this.handleSubmit}>
            <input className="input" value={this.state.value} onChange={this.handleChange} placeholder="enter a location"></input>
            </form>
            <Link to="events">
              <button className="outline-btn" value="Submit">Pïck</button>
            </Link>
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
