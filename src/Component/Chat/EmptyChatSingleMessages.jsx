/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Box,Typography,styled } from "@mui/material";
import moment from 'moment'
import { useContext } from "react";
import { LoginContext } from "../../contextapi/Loginprobider";
const EmptyChatSingleMessages = ({messages}) => {
    const {account} = useContext(LoginContext)
    const SendStryle = styled(Box)`
      background-color: #dcf8c6;
      max-width: 60%;
      width: fit-content;
      margin-left: auto;
      padding: 5px;
      margin-bottom: 10px;
      border-radius: 8px;
      word-break: break-word;
      align-items:center;
      gap:10px;
      display:flex

    `
    const ReciverStyle = styled(Box)`
    background-color: #ffffff;
    max-width: 60%;
    width: fit-content;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 8px;
    word-break: break-word;
    display:flex;
    align-items:center;
    gap:10px;

    `
    return (
        <>
        {account.sub === messages.senderId?
         <SendStryle>
         <Typography>{messages.text} </Typography>
 <Typography sx={{fontSize:'11px'}}> {moment(messages.date).format(`dddd, h:mm a`)}</Typography>
         
     </SendStryle>: 
     <ReciverStyle>
         <Typography>{messages.text} </Typography>
 <Typography sx={{fontSize:'11px'}}> {moment(messages.date).format(`dddd, h:mm a`)}</Typography>
         
     </ReciverStyle>
     }
        </>
        
    );
};

export default EmptyChatSingleMessages;