import React from 'react'
import { NavLink } from 'react-router-dom'
import {supabase} from '../supabaseClient'

function Nav({session, setSession}) {

    const loginSubmit = async ()=>{
        // Login via Google Oauth
        let { user, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
          })

        //ssetSession("Setting Something as session")
    }

    const logoutSubmit = async ()=>{
        // Todo - Add logic to logout
        let { error } = await supabase.auth.signOut()
       //setSession(null);
    }

    if (session != null){
        return ( <ul className="nav nav-pills navbar-expand navbar-light bg-light">
        <li className="nav-item"><NavLink className={({ isActive }) => "nav-link " + (isActive ? " active" : "")}
            to="/" end>Home</NavLink></li>
        <li className="nav-item"><NavLink className={({ isActive }) => "nav-link " + (isActive ? " active" : "")}
            to="/jointeam">Join Your Team!</NavLink></li>
        <li className="nav-item"><NavLink className={({ isActive }) => "nav-link " + (isActive ? " active" : "")}
            to="/createmeet">Create meeting</NavLink></li> 
        <li className="nav-item"><NavLink className={({ isActive }) => "nav-link " + (isActive ? " active" : "")}
            to={{pathname:"//meet.google.com" }}target = "_blank">Google meet</NavLink></li>  
        <li className="nav-item ms-auto"><button className="btn btn-primary m-1" id='logoutSubmit' onClick={()=>logoutSubmit()}>Logout</button></li>       
    </ul>)
    }
    else {
    return ( 
    <ul className="nav nav-pills navbar-expand navbar-light bg-light">
        <li className="nav-item "><NavLink className={({ isActive }) => "nav-link " + (isActive ? " active" : "")}
            to="/" end>Home</NavLink></li> 
            <div className="ms-auto" style={{display:"flex"}}>
               <li className="nav-item ms-auto"><button className="btn btn-primary m-1" id='loginSubmit' onClick={()=>loginSubmit()}>Login</button></li>
            </div>              
    </ul>)
    }
}

export default Nav;