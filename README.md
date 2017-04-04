# ![Upick](https://raw.githubusercontent.com/tomisstanding/Upick-frontend/master/src/assets/upicklogo.png)

### Author: Thomas Standing

### Technologies Used

This project was created using both Node.js and Express on the backend, with React, HTML/CSS and Javascript on the front end. I used a few different middlewares and different dependencies including but not limited to:
    
    "moment": "2.18.1",
    "object-assign": "4.1.0",
    "react": "^15.4.1",
    "react-datepicker": "0.44.0",
    "react-dom": "15.4.1",
    "react-redux": "5.0.1",
    "react-router": "3.0.0",
    "react-router-redux": "4.0.7",
    "redux": "3.6.0",
    "redux-thunk": "2.1.0"
    "body-parser": "^1.17.1",
    "cors": "^2.8.3",
    "eventful-node": "^1.1.1",
    "express": "^4.15.2",
    "method-override": "^2.3.8",
    "morgan": "^1.8.1",
    "node-fetch": "^1.6.3",
    "pg-promise": "^5.6.4"
    

A simple npm install upon installation should allow any developer access.     

### General Approach

My approach was simple, create a simplistic, functional real world app that would perform a simple search depending on type of event and location and date the user provided and give an effortless user experience with a easy to use interface.

![Eventful](https://upload.wikimedia.org/wikipedia/commons/6/68/Eventful_logo.png)

I chose to use [Eventful API](http://api.eventful.com/docs/events/search) which gave a robust and extensive json response in which I would be able to get what was needed for the application. 

Once I had API functionality built out and was able to test it successfully using postman, I was able to complete the front end with React and create my components that would interact with the API.

### User Stories

- Users can search for events based on location, date, and category.
- Users not satisfied with their events presented and feeling picky can also select another list of events by selecting pick again button.

### Wireframes

Home Page: 
![Homepage](https://raw.githubusercontent.com/tomisstanding/Upick-frontend/master/src/assets/homepage.png))

Events Page:
![Results Page](https://raw.githubusercontent.com/tomisstanding/Upick-frontend/master/src/assets/events.png)

### Unsolved issues

* There were additional features that I would like to have added such as leaving notifications that people were going to events on each specific event and look forward to working further on this in the future. 

* Huge thanks and credit to Dan Pease and Irwin Tsay, Bobby King, and Arun Sood who helped to make this project possible. 
