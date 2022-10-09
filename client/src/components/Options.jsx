import React, { useContext, useState } from 'react'
import {Button, TextField, Grid, Typography, Container, Paper} from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';
import {Assignment, Phone, PhoneDisabled} from '@mui/icons-material';
const Options = ({ children }) => {
  //tabnine helps to autofill code language
  
  //useContext helps us to destruct properties from one component to another
  const {me, callAccepted,name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext);
  const [idToCall, setIdToCall]=useState('');
  return (
    <Container sx={{  width: '600px', margin: 'auto'}} xs={{width:'480px'}}>
      <Paper elevation={10} sx={{padding:5}}>
        <form sx={{ display: 'flex',flexDirection: 'column',}} noValidate autoComplete='off'>
          <Grid container spacing={2} sx={{width: '100%'}} >
            <Grid item xs={12} md={6}>
                <Typography gutterBottom variant="h6">Account Info</Typography>
                <TextField label="Name" value={name} onChange={(e)=> setName(e.target.value)} fullWidth/>
                <CopyToClipboard text={me} sx={{ marginTop: 20}}>
                  <Button variant="contained" color='primary' fullWidth startIcon={<Assignment fontSize="large"/>}>
                      Copy Your ID
                  </Button>
                </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} >
                <Typography gutterBottom variant="h6">Make a Call</Typography>
                <TextField label="ID to call" value={idToCall} onChange={(e)=> setIdToCall(e.target.value)} fullWidth/>
                <CopyToClipboard text={me} sx={{ marginTop: 20}}>
                  {callAccepted && !callEnded ?(<Button variant="contained" color='secondary' fullWidth sx={{marginTop: 20,}} onClick={leaveCall} startIcon={<PhoneDisabled fontSize="large"/>}>
                     Hang Up
                  </Button>) : (
                      <Button variant="contained" color='primary' fullWidth sx={{ marginTop: 20,}} onClick={()=> callUser(idToCall)} startIcon={<Phone fontSize="large"/>}>
                        Call
                      </Button>
                  )}
                </CopyToClipboard>
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options;
