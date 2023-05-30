import { useContext, useState } from "react";
import { LoginContext } from "../../../contextapi/Loginprobider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import {Chat as MessageIcon } from '@mui/icons-material'
import Morevertheader from "./Morevertheader";
import Profiledrawer from "../../Drawer/Profiledrawer";

const Menuheader = () => {
    const [drawer,setdrawer] = useState(false)
    const {account} = useContext(LoginContext)
    const Img = styled('img')({
        height:40,
        width:40,
        borderRadius:'50%'
    })
    const toggleDrawer = ()=>{
        setdrawer(true)
        console.log(drawer)
    }
    return (
        <>
        <Box sx={{height:'45px',backgroundColor:'#ededed',padding:'8px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Img onClick={toggleDrawer} src={account.picture} alt="" />
        <Box sx={{display:'flex',gap:'24px'}}>
           <MessageIcon style={{marginTop:'2px'}}></MessageIcon> 
          <Morevertheader  setopen ={setdrawer}></Morevertheader>
        </Box>
        </Box>
        <Profiledrawer open={drawer} setopen ={setdrawer}></Profiledrawer>
        </>
    );
};

export default Menuheader;