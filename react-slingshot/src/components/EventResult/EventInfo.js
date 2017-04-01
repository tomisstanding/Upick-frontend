import React from "react";

function EventInfo(props) {
  let eventStatus;
  let statusStyle = {
    color: '#FF3B44',
  }

  return(
      <div>
        <img className="event-image" src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <div className="event-info">
          <ul>
            <li dangerouslySetInnerHTML={{__html: (props.description)}} /><br>
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
