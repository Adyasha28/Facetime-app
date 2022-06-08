import React, {useContext} from 'react'
import { Button } from '@mui/material'
import { SocketContext } from '../SocketContext'
const Notifications = () => {
    const {answerCall, name, callAccepted, receivingCall}= useContext(SocketContext);
    return(
      <>
      {receivingCall && !callAccepted && (
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop:10}}>
          <h1>{name} is calling:</h1>
          <Button variant="contained" color="primary" onClick ={answerCall}>
            Answer
          </Button>

        </div>
      )}
      </>
  )
}

export default Notifications 