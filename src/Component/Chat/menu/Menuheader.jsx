import { useContext } from "react";
import { LoginContext } from "../../../contextapi/Loginprobider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import {Chat as MessageIcon } from '@mui/icons-material'
import Morevertheader from "./Morevertheader";

const Menuheader = () => {
    const {account} = useContext(LoginContext)
    const Img = styled('img')({
        height:40,
        width:40,
        borderRadius:'50%'
    })
    return (
        <Box sx={{height:'45px',backgroundColor:'#ededed',padding:'8px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Img  src={account.picture} alt="" />
        <Box sx={{display:'flex',gap:'24px'}}>
           <MessageIcon style={{marginTop:'2px'}}></MessageIcon> 
          <Morevertheader></Morevertheader>
        </Box>
        </Box>
    );
};

export default Menuheader;