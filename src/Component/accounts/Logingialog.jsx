
import { Box, Dialog, List, ListItem, Typography } from "@mui/material";
import qrImage from '../../assets/Qoz3Il.jpg'
import styled from "@emotion/styled";
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { useContext } from "react";
import { LoginContext } from "../../contextapi/Loginprobider";
import { addUser } from "../../Service/api";

const Logingialog = () => {

    const {setAccount} = useContext(LoginContext)
    const DialogStyle = {
        height:'90%',
        width:'76%',
        maxWidth:'100%',
        marginTop: '10%',
        maxHeight:'100%',
        boxShadow:'none',
        overflow:'none'
    }

    const Components = styled(Box)`
    display:flex;
    justify-content:space-around;
    margin-top:60px;
    
  
   
   `
   const Container = styled(Box)`
   padding:8px 0px 0px 0px
   `

   const QrCodes = styled(`img`)({
     height:'280px',
     width:'280px'
   })

   const onLoginsuccess = async(res)=>{
       const decoded =  jwt_decode(res.credential)
       console.log(decoded)
       setAccount(decoded)
       await addUser(decoded)

   }
   const onError = (res)=>{
       console.log(res)
   }
    return (
        <Box>
            <Dialog open={true} PaperProps={{sx:DialogStyle}} hideBackdrop={true}>
                <Components >
                    <Container>
                        
                         <Typography sx={{fontSize:'27px',marginBottom:'40px'
                        ,fontFamily:'sans-serif',color:'gray'}}>To use WhatsApp on your Computer:</Typography>

                         <List>
                            <ListItem sx={{fontFamily:'sans-serif',fontSize:'18px',color:'gray',letterSpacing:'2px'}}>
                                1. Open WhatsApp on your mobile
                            </ListItem>
                            <ListItem sx={{fontFamily:'sans-serif',fontSize:'18px',color:'gray',letterSpacing:'2px'}}>
                                2. Tap menu setting and open WhatsApp app
                            </ListItem>

                            <ListItem sx={{fontFamily:'sans-serif',fontSize:'18px',color:'gray',letterSpacing:'2px'}}>
                                3. Tap on Link Device
                            </ListItem>

                            <ListItem sx={{fontFamily:'sans-serif',fontSize:'18px',color:'gray',letterSpacing:'2px'}}>
                                4. Point your phone to this screen to capture the code
                            </ListItem>
                            
                         </List>
                    </Container>
                    <Box>
                        <QrCodes src={qrImage} alt="" />
                        
                    </Box>
                    
                </Components>
                <Box sx={{maxWidth:'200px',mx:'auto',marginTop:'30px'}}>
                    <GoogleLogin
                    onSuccess={onLoginsuccess}
                    onError={onError}
                    ></GoogleLogin></Box>
            </Dialog>
        </Box>
    );
};

export default Logingialog;