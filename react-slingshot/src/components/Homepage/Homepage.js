import React, { Component } from 'react';
import { Link } from 'react-router';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="bg-img"></div>
        <Nav />
        <div className="homepage-container">
          <h1>Looking for something to do today?</h1>
            <button className="outline-btn">pïck</button>
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
