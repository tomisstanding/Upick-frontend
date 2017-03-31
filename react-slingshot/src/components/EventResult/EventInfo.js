import React from "react";

function EventInfo(props) {
  let eventStatus;
  let statusStyle = {
    color: '#FF3B44',
  }
  let time = {props.time}; // our time from our api
  time = time.split(':'); // convert to array

  return(
      <div>
        <h2>{props.title}
        </h2>
        <div className="event-info">
          <img src={props.image} alt={props.title} />
          <ul>
            <p dangerouslySetInnerHTML={{__html: (props.description)}} /><br>
            </br><p>Where: {props.venue}</p><br>
            </br><p>{props.time}</p><br>
            </br><li>Address: {props.address}</li><br>
            </br><a href={props.url}>Event Website</a>
          </ul>
        </div>
      </div>
  );
}

export default EventInfo;
