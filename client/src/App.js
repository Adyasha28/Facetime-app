import React from 'react'
import { AppBar, Typography } from '@mui/material';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';



const App = () => {
  return (
    <div sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}>
      <AppBar sx={{ borderRadius: 15,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    border: '2px solid black',}} position='static' color='inherit'>
            <Typography variant='h2' align='center'>FaceTime</Typography>
        </AppBar>
        
        <VideoPlayer/>
        <Options>
          <Notifications/>
        </Options>
    </div>
  )
}

export default App;