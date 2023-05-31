/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import {  AttachFileOutlined, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";


const Emptychatfooter = ({sendTexts,setMessageText,messageTest}) => {
    const ClipIcon = styled(AttachFileOutlined)`
       transform:rotate(40deg)
    `
    
    return (
        <Box sx={{background:'#ededed',display:'flex',justifyContent:'center',alignItems:'center',height:'7.5vh'}}>
            <Box>
                <EmojiEmotionsOutlined></EmojiEmotionsOutlined>
                <ClipIcon></ClipIcon>
                
            </Box>
        <InputBase 
        onChange={(e)=>setMessageText(e.target.value)}
        onKeyPress={(e)=>sendTexts(e)}
        value={messageTest}
        sx={{marginX:'5px',height:'5vh',padding:'10px 20px',width:'88%',background:'#ffffff',borderRadius:'10px'}} type="text" placeholder="type messages" />
        <Mic></Mic>
        </Box>
    );
};

export default Emptychatfooter;