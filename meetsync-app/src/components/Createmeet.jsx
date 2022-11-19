import React from 'react'

function Landing() {
    return (
        <>


            <div className="form-contain">
                <div>
                    <h1 align="center" style={{ "marginBottom": "5%" }}> Pick a date and time</h1>
                </div>
                <form id="requestForm" className="login-form" >
                    <div className="form-outline mb-4">
                        <label>Select a Date</label>
                        <input id="date" type="date" name="date" className="form-control"/>
                    </div>
                    <div className="form-outline mb-4">
                        <label>Select a Time</label>
                        <input id="time" type="time" name="time" className="form-control"/>
                    </div>

                    {/* <button type="button" onClick={handleSubmit} className="btn btn-primary m-1" id="create-req-btn">Submit</button> */}

                </form>
            </div>

        </>
    )
}

export default Landing