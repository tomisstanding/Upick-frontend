import React from "react";

function EventInfo(props) {
  let eventStatus;
  let statusStyle = {
    color: '#FF3B44',
  }
  let time = (props.time); // our time from our api
  time = time.split(':'); // convert to array

  let hour = Number(time[0]);
  let minutes = Number(time[1]);
  let seconds = Number(time[2]);

  let timeValue;

  if (hour > 0 && hour <= 12) {
    timeValue= "" + hour;
  } else if (hour > 12) {
    timeValue= "" + (hour - 12);
  } else if (hour == 0) {
    timeValue= "12";
  }

  timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
  timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
  timeValue += (hour >= 12) ? " P.M." : " A.M.";  // get AM/PM

  console.log("this is the time", timeValue);

  return(
      <div>
        <img src={props.image} alt={props.title} />
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
