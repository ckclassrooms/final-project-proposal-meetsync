import React from 'react' 
import QRCode from 'qrcode'
import { useState } from 'react'
// import { Button } from '@mui/material'
function Qrcode() {
    const [url, setUrl] = useState('')
    const [qr, setQr] = useState('')
    const GenerateQRCode = () => {
        QRCode.toDataURL("https://meetsync.netlify.app/createmeet", {
            width: 80,
            height:80,
            margin: 2,
            color: {
                // dark: '#335383FF',
                // light: '#EEEEEEFF'
            }
        }, (err, url) => {
            if (err) return console.error(err)
            console.log(url)
            setQr(url)
        })
    }
    return (
        <div className="app">
            <h1>QR Generator</h1>
            {/* <input 
                type="text"
                placeholder="e.g. https://google.com"
                value={url}
                onChange={e => setUrl(e.target.value)}
                onkeydown={GenerateQRCode}/> */}

            {/* <Button variant="contained" onClick={GenerateQRCode}>Generate</Button> */}
            <button onClick={GenerateQRCode}>Press here</button>
            {qr && <>
                <img src={qr} />
                
            </>}
        </div>
    )
}
export default Qrcode