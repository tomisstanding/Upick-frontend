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
            <p dangerouslySetInnerHTML={{__html: (props.description)}}></p><br>
            </br><p>Where: {props.venue}</p><br>
            </br><p>{props.time}</p><br>
            </br><p>Address: {props.address}</p><br>
            </br><a href={props.url}>Buy tickets or for more information visit here!</a>
        </div>
      </div>
  );
}

export default EventInfo;
