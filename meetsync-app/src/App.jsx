import React from "react";
import "./App.css";
import { AddRequestForm, RequestList } from './components/ServiceRequest'
import Nav from './components/Navbar'
import Landing from './components/Landing'
import Qrcode from './components/Qrcode'
import Createmeet from './components/Createmeet'
import Event from "./components/Event";
//import RequestChart from "./components/Chart";
import { supabase } from './supabaseClient'
import { gapi } from "gapi-script";
import {
  Routes,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";

let channel

function App() {

  const [session, setSession] = useState(null);
  const [requests, setRequests] = useState([]);


  // TO DO - Create setup for managing sessions. Check out the supabase quickstart guides to get idea about this. 
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);


  // useEffect(() => {

  //   getReq().then((data) => {

  //     console.log(data)
  //     setRequests(data)
  //   })


  //   if (session != null) {

  //     channel = supabase
  //       .channel('public:service_request')
  //       .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'service_request' }, (payload) => getReq().then((data) => { setRequests(data) }))
  //       .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'service_request' }, (payload) => getReq().then((data) => { setRequests(data) }))
  //       .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'service_request' }, (payload) => getReq().then((data) => { setRequests(data) }))
  //       .subscribe()
  //   } else {
  //     // Unsubscribing from the channel
  //     console.log("Unsubscribing and removing all channels")
  //     //supabase.removeAllChannels()
  //     if (channel != undefined) {
  //       supabase.removeChannel(channel)
  //     }


  //   }
  // }, [session])


  // async function getReq() {
  //   let { data, error } = await supabase
  //     .from("service_request")
  //     .select("name, email, short_desc, long_desc, accept_reject, id")
  //     .eq("accept_reject", false);

  //   // tempData is temp array for prev code
  //   let tempData = []
  //   data.forEach((item, index) => {
  //     tempData.push({
  //       "name": item.name,
  //       "email": item.email,
  //       "sdescription": item.short_desc,
  //       "ldescription": item.long_desc,
  //       "isCompleted": item.accept_reject,
  //       "id": item.id
  //     });
  //   })

  //   return tempData;
  // }


  // // TO DO - Setup listener for supabase realtime API for updates to the service requests 
  // // For example , if any of the service request is completed then this should invoke this realtime API which inturn should update the list of requests

  // const addRequest = async (element) => {
  //   console.log(element)
  //   const newRequests = [...requests, element];
  //   // TO DO 
    
  //   // TO DO 
  //   const { data } = await supabase.auth.getSession();
  //   const { data: newData, error: createRequestError } = await supabase.from("service_request").insert([
  //     {
  //       email: element.email,
  //       short_desc: element.sdescription,
  //       long_desc: element.ldescription,
  //       accept_reject: false,
  //       user_id: data.session.user.id,
  //       name: element.name
  //     },
  //   ]);
  //   let { data: retData, error: someError } = await supabase
  //     .from("service_request")
  //     .select("name, email, short_desc, long_desc, accept_reject, id")
  //     .eq("accept_reject", false);

  //   // Create a temp array to make the code functional with previous assignment
  //   // Add comments in the writeup about this
  //   let newRequestsData = []
  //   retData.forEach((item, index) => {
  //     newRequestsData.push({
  //       "name": item.name,
  //       "email": item.email,
  //       "sdescription": item.short_desc,
  //       "ldescription": item.long_desc,
  //       "isCompleted": item.accept_reject,
  //       "id": item.id
  //     });
  //   })

  //   // Call the supabase API to add the new service request (initially the accept_reject should be 'false' to indicate the service request is yet to completed by an admin).
  //   // When you will insert the a service request record you will also have to provide the "user_id". This is a field which maps which user created the service request.
  //   // For getting this you can make use of supabase.auth.getSession(). The will return a json containing information about the authenticated user
  //   // If this API call succeeds add the element to the list of requests with setRequests  
  //   setRequests(newRequestsData);
  // };

  // const completeRequest = async (index, serviceId = 0) => {
  //   const newRequests = [...requests];
    
  //   // TO DO
  //   // Call the supabase API to update the service request as completed (i.e. the accept_reject flag database column will become 'true' now).
  //   // If this API call succeeds update the element to the list of requests with setRequests  


  //   const { data, error } = await supabase
  //     .from("service_request")
  //     .update({ accept_reject: true })
  //     .eq("id", serviceId);
  //   //return { data, error };

  //   getReq().then((data) => { setRequests(data) })

  //   // Call the supabase API to update the service request as completed (i.e. the accept_reject flag database column will become 'true' now).
  //   // If this API call succeeds update the element to the list of requests with setRequests  
  //   newRequests[index].isCompleted = true;
  //   setRequests(newRequests);
  // };

  // const removeRequest = async (index, serviceId = 0) => {
  //   const newRequests = [...requests];
 
  //   const { data, error } = await supabase
  //     .from("service_request")
  //     .delete()
  //     .eq("id", serviceId);


  //   getReq().then((data) => { setRequests(data) })

  //   // Call the supabase API to remove / delete the service request .
  //   // If this API call succeeds remove the element from the list of requests with setRequests  
  //   newRequests.splice(index, 1);
  //   setRequests(newRequests);
  // };

  return (
    <>
      <Nav session={session} setSession={setSession} />
      <Routes>
        {/* Allow only authenticated user to proceed to RequestList, AddRequestForm, RequestChart else Navigate to landing component */}
        <Route path="/" element={<Landing />} />
        <Route path="/jointeam" element={<Qrcode />} />
        <Route path="/createmeet" element={<Createmeet />} />
        <Route path="/event" element={<Event />} />
        {/* <Route path="/chart" element={<RequestChart requests={requests} />} /> */}
      </Routes>
    </>
  );
}

export default App;