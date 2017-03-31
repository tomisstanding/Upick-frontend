import React from "react";

function EventInfo(props) {
  let eventStatus;
  let statusStyle = {
    color: '#FF3B44',
  }

  if(props.status === false){
    eventStatus = 'Open Right Now';
    statusStyle.color = '#41FFC0';

  } else {
    eventStatus = 'This Place is Closed'
  }

  return(
      <div>
        <h2>{props.name}
        </h2>
        <div className="event-info">
          <ul>
            <li style={statusStyle} >{eventStatus}</li>
            <li>Title: {props.title}</li>
            <li>Description: {props.description}</li>
            <li>Venue: {props.venue}</li>
            <li>Address: {props.address}</li>
          </ul>
        </div>
      </div>
  );
}

export default EventInfo;
