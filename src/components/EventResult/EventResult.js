import React, { Component } from "react";
import { browserHistory } from "react-router";
import { Link } from "react-router";

import Nav from "../Nav/Nav";
import EventInfo from "./EventInfo";

class EventResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      loader: {
        display: 'block'
      },
      isVisible: {
        opacity: '0',
      },
      location: '',
      keywords: '',
      date: ''
    }
  }

  componentDidMount() {

    // Found code to turn an querystring into and object here
    // http://stackoverflow.com/questions/8648892/convert-url-parameters-to-a-javascript-object

    let search = browserHistory.getCurrentLocation().search.substring(1);
    search = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

      fetch(`https://u-pick.herokuapp.com/events?keywords=${search.keywords}&location=${search.location}&date=${search.date}`, {
        method: 'GET'
      })
      .then(r => r.json())
      .then(response => {
        this.setState({loader: { display: 'none'}});
        this.setState({isVisible: {opacity: '1'}});
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

        this.setState({
          events,
          location: search.location,
          keywords: search.keywords,
          date: search.date
        });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
    });
  }

  handleSubmit() {
    console.log('fired!');
    fetch(`https://u-pick.herokuapp.com/events?keywords=${this.state.keywords}&location=${this.state.location}&date=${this.state.date}`, {
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
              {this.state.events.map((event, index) => {
                if (index < 3) {
                  return (
                    <div key={index} className="event-card">
                      <EventInfo
                        image={event.image}
                        time={event.time}
                        title={event.title}
                        description={event.description}
                        venue={event.venue}
                        address={event.address}
                        url={event.url}
                      />
                    </div>
                  );
                } else {
                  return "";
                }
              })}

              <div className="randomizer">
                <h2 id="picky">Feeling Picky?</h2>
                  <Link to="/">
                    <button className="standard-btn">Pick Again!</button>
                  </Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default EventResult;
