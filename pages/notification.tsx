import React, { useState } from "react";
import Main2Layout from "@/components/common/layout/main2";
import { Stack ,Typography} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export interface INotificationProps {}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Notification(props: INotificationProps) {
  const [isRead,setIsRead ] =useState(false);
  const handleClick = () => {
    setIsRead(true);
  };
  const styles = {
    borderLeft: isRead ? 'none' : '2px solid red',
    paddingLeft: '5px',
    backgroundColor: 'red',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer'
  };
  return (
  <Stack sx={{width:'100%',alignItems:'center'}}>
    <Stack sx={{width:'90%',height:'550px'}}>
    <Stack direction={'row'} alignItems={'center'} sx={{gap:'10px'}}><Typography sx={{borderBottom:'2px solid blue',color:'grey'}} variant="h6">Notifications</Typography> <NotificationsIcon sx={{color:'grey'}}/></Stack>
    <Box sx={{ width: '100%',marginTop:'10px' }} style={styles} onClick={handleClick} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            <Stack  direction={'row'} justifyContent={'space-between'}>
              <Stack  direction={'row'} sx={{width:'auto'}}>
              <AccountCircleIcon sx={{width:'50px',height:'50px'}}/>
              <Stack sx={{paddingLeft:'15px'}}>
                <Stack direction={'row'} sx={{gap:'10px'}}>
                  <Typography>Hậu Dog Điên</Typography>
                  <Typography>09876545678</Typography>
                </Stack>
                <Typography>
                  10 min ago
                </Typography>               
              </Stack>
              </Stack>
              <Box component={'img'} sx={{width:'50px',height:'50px', marginRight:'15px'}}></Box>
            </Stack>
            </Item>
        </Grid>      
      </Grid>
    </Box>
    {/* 2 */}
    <Box sx={{ width: '100%', marginTop:'10px' }} style={styles} onClick={handleClick} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            <Stack  direction={'row'} justifyContent={'space-between'}>
              <Stack  direction={'row'} sx={{width:'auto'}}>
              <AccountCircleIcon sx={{width:'50px',height:'50px'}}/>
              <Stack sx={{paddingLeft:'15px'}}>
                <Stack direction={'row'} sx={{gap:'10px'}}>
                  <Typography>Hậu Dog Điên</Typography>
                  <Typography>09876545678</Typography>
                </Stack>
                <Typography>
                  10 min ago
                </Typography>               
              </Stack>
              </Stack>
              <Box component={'img'} sx={{width:'50px',height:'50px', marginRight:'15px'}}></Box>
            </Stack>
            </Item>
        </Grid>      
      </Grid>
    </Box>
  </Stack>
  </Stack>
  );
}
Notification.Layout = Main2Layout;
export default Notification;
