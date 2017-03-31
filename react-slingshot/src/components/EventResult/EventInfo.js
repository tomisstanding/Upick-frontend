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
    restaurantStatus = 'This Place is Closed'
  }

  return(
      <div>
        <h2>{props.name}</h2>
        <div className="event-info">
          <ul>
            <li style={statusStyle} >{eventStatus}</li>
            <li>Rating: {props.rating}</li>
            <li>Phone: {props.phone_number}</li>
            <li>Price: {props.price_range}</li>
          </ul>
        </div>
      </div>
  );
}

export default EventInfo;
