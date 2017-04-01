import React, { Component } from "react";
import { browserHistory } from "react-router";

// import Homepage from "../Homepage/Homepage.js"
import Nav from "../Nav/Nav";
import EventInfo from "./EventInfo";

class EventResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: {
        display: 'block'
      },
      isVisible: {
        opacity: '0',
      },
      events: [
        {
          image: '',
          time: '',
          title: 'Please Wait While We Get Your Results',
          description: 'Thank you for your patience',
          venue: '',
          address: '',
          url: ''
        }
      ]
    }
  }

  componentDidMount() {
      fetch(`http://localhost:8000/events/?location=${localStorage.city}`, {
        method: 'GET'
      })
      .then(r => r.json())
      .then(response => {
        const events = response.results.search.events.event.map((event) => {
          return {
            image: event.image.url || 'https://d30y9cdsu7xlg0.cloudfront.net/png/34527-200.png',
            time: event.start_time,
            title: event.title,
            description: event.description,
            venue: event.venue_name,
            address: event.venue_address,
            url: event.venue_url
          };
        });

        this.setState({ events });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
    });
  }

  handleSubmit(event) {
    fetch(`http://localhost:8000/events/?location=${localStorage.city}`, {
        method: 'GET'
      })
      .then(r => r.json())
      .then(response => {
        this.setState({loader: {display: 'none'}});
        const events = response.results.search.events.event.map((event) => {
          return {
            image: event.image.url || 'https://d30y9cdsu7xlg0.cloudfront.net/png/34527-200.png',
            time: event.start_time,
            title: event.title,
            description: event.description,
            venue: event.venue_name,
            address: event.venue_address,
            url: event.venue_url
          };
        });
        this.setState({ events });
        this.setState({isVisible: {opacity: '1'}});
      })
      .catch((err) => {
        console.log('ERROR: ', err);
    });

  }

  render(){
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="loading-anim" style={this.state.loader}></div>
            <div className="event-results">
              <div className="event-card">
                <EventInfo
                  image={this.state.events[0].image}
                  time={this.state.events[0].time}
                  title={this.state.events[0].title}
                  description={this.state.events[0].description}
                  venue={this.state.events[0].venue}
                  address={this.state.events[0].address}
                  url={this.state.events[0].url}
                />
              </div>

               <div className="event-card">
                <EventInfo
                  image={this.state.events[1].image}
                  time={this.state.events[1].time}
                  title={this.state.events[1].title}
                  description={this.state.events[1].description}
                  venue={this.state.events[1].venue}
                  address={this.state.events[1].address}
                  url={this.state.events[1].url}
                />
              </div>

               <div className="event-card">
                <EventInfo
                  image={this.state.events[2].image}
                  time={this.state.events[2].time}
                  title={this.state.events[2].title}
                  description={this.state.events[2].description}
                  venue={this.state.events[2].venue}
                  address={this.state.events[2].address}
                  url={this.state.events[2].url}
                />
              </div>

              <div className="randomizer">
                <h2 id="picky">Feeling Picky?</h2>
                <button className="standard-btn" onClick={this.handleSubmit.bind(this)}>Pick Again!</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default EventResult;
