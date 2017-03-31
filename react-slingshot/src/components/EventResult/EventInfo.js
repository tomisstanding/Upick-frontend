import React from "react";

function EventInfo(props) {
  let eventStatus;
  let statusStyle = {
    color: '#FF3B44',
  }

  return(
      <div>
        <h2>{props.title}
        </h2>
        <div className="event-info">
          <img src={props.image} />
          <ul>
            <p>{props.description}</p><br>
            </br><p>Where: {props.venue}</p><br>
            </br><li>Address: {props.address}</li><br>
            </br><a href={props.url}>Event Website</a>
          </ul>
        </div>
      </div>
  );
}

export default EventInfo;
