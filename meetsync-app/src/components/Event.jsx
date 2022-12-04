import React from 'react'
import { useState, useEffect } from "react";
import { gapi } from "gapi-script"; //google api import 1.0

function Event({ match, location  }) {

    //google api keys and tokens 1.0
    const [events, setEvents] = useState([]);
    const [events2, setEvents2] = useState([]);

    const calendarID = import.meta.env.VITE_APP_CALENDAR_ID;
    const calendarID2 = import.meta.env.VITE_APP_CALENDAR_ID2;
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

    useEffect(() => {
        console.log(location)
        console.log(match)
        console.log("Called Once")
        const events = getEvents(calendarID, apiKey);
        setEvents(events);
        const events2 = getEvents2(calendarID2, apiKey);
        setEvents2(events2);
    }, []);
// const oneTime = ()=>{
//     console.log("Called Once")
//     const events = getEvents(calendarID, apiKey);
//     setEvents(events);
//     const events2 = getEvents2(calendarID2, apiKey);
//     setEvents2(events2);
// }
    
// oneTime()

    //1.0 ends here

    return (
        <>
            {/* <div>
           <p>{description}</p>
            </div> */}
            {/* 1.0 events */}
            <ul>
                {events?.map((event) => (
                    <li key={event.id} className="flex justify-center">
                        {/* <Event description={event.summary} /> */}
                        <p> User 1 {event.summary}  {event.start.dateTime}</p>
                    </li>
                ))}
            </ul>
            <ul>
                {events2?.map((event2) => (
                    <li key={event2.id} className="flex justify-center">
                        <p>User 2 {event2.summary}  {event2.start.dateTime} </p>
                    </li>
                ))}
            </ul>
            {/* 1.0 event ends here */}
        </>
    );

}

export default Event;