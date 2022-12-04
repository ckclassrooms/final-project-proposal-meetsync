import React from 'react'
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script"; 


function Landing() {

     //google api keys and tokens 1.0
     const [events, setEvents] = useState([]);
     const [events2, setEvents2] = useState([]);
 
     const calendarID = import.meta.env.VITE_APP_CALENDAR_ID;
     let calendarID2 = "";
     const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;
     const accessToken = import.meta.env.VITE_APP_GOOGLE_ACCESS_TOKEN;
 
     //let calendararray = [calendarID, calendarID2];
 
     const getEvents = (calendarID, apiKey) => {
         function initiate() {
             gapi.client.init({
                 apiKey: apiKey,
             })
                 .then(function () {
                     return gapi.client.request({
                         path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                     });
                 })
                 .then(
                     (response) => {
                         let events = response.result.items
                         setEvents(events);
                         // events.forEach((event)=>{
                         //   console.log(event.summary);
                         // })
                     },
                     function (err) {
                         return [false, err];
                     }
                 );
         }
         gapi.load("client", initiate);
 
     };
 
     const getEvents2 = (calendarID2, apiKey) => {
         function initiate() {
             gapi.client.init({
                 apiKey: apiKey,
             })
                 .then(function () {
                     return gapi.client.request({
                         path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID2}/events`,
                     });
                 })
                 .then(
                     (response) => {
                         let events2 = response.result.items
                         setEvents2(events2);
                         // events2.forEach((event2)=>{
                         //   console.log(event2.summary);
                         // })
                     },
                     function (err) {
                         return [false, err];
                     }
                 );
         }
         gapi.load("client", initiate);
 
     };
 


    // Above Code Changed

    
function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    //window.location.href = "/event"

    console.log("Called Once")
    calendarID2 = document.getElementById("text").value;
    const events = getEvents(calendarID, apiKey);
    setEvents(events);
    const events2 = getEvents2(calendarID2, apiKey);
    setEvents2(events2);
    var strText1 = document.getElementById("datetime").value;
    console.log(new Date(strText1).getTime());
   
  }



    return (
        <>
            <div className="form-contain">
                <div>
                    <h1 align="center" style={{ "marginBottom": "5%" }}> Pick a date and time</h1>
                </div>
                <form id="requestForm" className="login-form" >
                    <div className="form-outline mb-4">
                        <label>Select a Date and time </label>
                        <input id="datetime" type="datetime-local" name="datetime" className="form-control"/>
                    </div>
                    {/* <div className="form-outline mb-4">
                        <label>Select a Time</label>
                        <input id="time" type="time" name="time" className="form-control"/>
                    </div> */}
                    <div className="form-outline mb-4">

                        <label>GCal ID</label> <p>Do you need a dummy gcal id ? c_c2167a71c53be2ad29b75b0019b140160caa8384ba5db7536c3dd11217a4f4e2@group.calendar.google.com</p>
                        <input id="text" type="password" name="text" className="form-control"/>
                    </div>
                    {/* <button type="button" onClick={handleSubmit} className="btn btn-primary m-1" id="create-req-btn">Submit</button> */}

                </form>
                <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
            </div>
       
            <>
            

            {/* <div>
           <p>{description}</p>
            </div> */}
            {/* 1.0 events */}
            <ul>
                {events?.map((event) => (
                    <li key={event.id} className="flex justify-center">
                        {/* <Event description={event.summary} /> */}
                        <p> User 1 {event.summary} {event.start.dateTime}
                        {new Date(document.getElementById("datetime").value).getTime()== new Date(event.start.dateTime).getTime() ? "   Busy" : "   Not Busy"}</p>
                    </li>
                ))}
            </ul>
            <ul>
                {events2?.map((event2) => (
                    <li key={event2.id} className="flex justify-center">
                        <p>User 2 {event2.summary}  {event2.start.dateTime} 
                        {new Date(document.getElementById("datetime").value).getTime() == new Date(event2.start.dateTime).getTime() ? "   Busy" : "   Not Busy"}
                        </p>
                    </li>
                ))}
            </ul>
          
            {/* 1.0 event ends here */}
        </>
        </>
            
    )
}

export default Landing