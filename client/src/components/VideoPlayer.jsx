import React, {useContext} from 'react'
import { Grid, Typography, Paper } from '@mui/material';
import { SocketContext } from '../SocketContext';


const VideoPlayer = () => {
  const {name,callAccepted, myVideo, userVideo, callEnded,stream,call} = useContext(SocketContext);
  return (
    <Grid container sx={{   
      justifyContent: 'center',
       margin:'auto'
    }} >
      {
        stream && (
          <Paper sx={{  padding: '10px',
          border: '2px solid black',
          margin: '10px',}}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay style={{width:"300px"}}/>
          </Grid>
  
        </Paper>
        )
      }
      {
        callAccepted && !callEnded && (
          <Paper sx={{
            padding: '10px',
            border: '2px solid black',
            margin: '10px',
          }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay style={{ width: "300px"}} />
          </Grid>
  
        </Paper>
        )
      }

  
    </Grid>
  )
}

export default VideoPlayer;