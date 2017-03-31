import React, { Component } from "react";
import { Link, browserHistory } from "react-router";


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
          title: 'Dummy event',
          description: 'Holding place for event',
          venue: 'Some venue',
          address: '1234 fake street',
          url: 'http://fakestuff.com'
        }
      ]
    }
  }

  componentDidMount() {
      fetch(`http://localhost:8000/events/`, {
        method: 'GET'
      })
      .then(r => r.json())
      .then(response => {

        console.log(response);

        const events = response.results.search.events.event.map((event) => {
          return {
            image:event.image.medium,
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

    // fetch('http://localhost:8000/events', {
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

              // <a href={`http://www.google.com/maps/place/${this.state.bars.name}/@${this.state.bars.coordinates.latitude},${this.state.bars.coordinates.longitude},16z`} target="_blank">
              //   <button className="secondary-btn">View on Google Maps<i className="fa fa-angle-right" id="secondary-btn-caret"></i></button>
              // </a>
  render(){
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="loading-anim" style={this.state.loader}></div>
          <div className="event-results">
            <div className="event-card">
              <EventInfo
                // image={this.state.events.[0].image}
                title={this.state.events[0].title}
                description={this.state.events[0].description}
                venue={this.state.events[0].venue}
                address={this.state.events[0].address}
                url={this.state.events[0].url}
              />

            </div>
            <div className="randomizer">
              <h2>Need another option?</h2>
              <button className="standard-btn" onClick={this.selectNewEvent.bind(this)}>Feeling Picky?</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventResult;
