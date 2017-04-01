import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

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
          image: "dummy.jpg",
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

        console.log(response);

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

  selectNewEvent() {
    this.setState({isVisible: {opacity: '0'}});
    this.setState({loader: {display: 'block'}});

    fetch(`http://localhost:8000/events`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((data) => {
        this.setState({events: data[Math.floor(Math.random() * data.length)]});
        this.setState({loader: {display: 'none'}});
        this.setState({isVisible: {opacity: '1'}});
      });
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    })
  }

  handleSubmit(event) {
    // event.preventDefault();

    // fetch(`http://localhost:8000/events/${this.state.value}`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     events: {
    //       title: `${this.state.event.title}`,
    //       description: `${this.state.event.description}`,
    //       venue_name: `${this.state.event.venue_name}`,
    //       venue_address: `${this.state.event.venue_address}`
    //     }
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then((data) => {
    //   // browserHistory.push('/users/dashboard');
    //   console.log(data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })

  }

  render(){
    return(
      <div>
        <Nav />
        <div className="container">
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
            <div className="randomizer">
              <h2 id="picky">Feeling Picky?</h2>
              <button className="standard-btn" onClick={this.selectNewEvent.bind(this)}>Pick Again</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventResult;
