
/* eslint-disable react/prop-types */
import { ArrowBack, Edit } from "@mui/icons-material";
import {  Box, Drawer, Typography } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../../contextapi/Loginprobider";


const Profiledrawer = ({open,setopen}) => {
    const {account} = useContext(LoginContext)
    const handleclose = ()=>{
        setopen(false)
        console.log(open)
    }
    const drawerStyle = {
        left:20,
        top:31,
        height:'90%',
        width:'30%',
        boxShadow:'none'
    }
    return (
        
             <Drawer
             style={{zIndex:1500}}
             PaperProps={{sx:drawerStyle}}
        
        open={open}
        onClose={handleclose}
    >
      
     <Box sx={{height:'100px',backgroundColor:'#008069',display:'flex',gap:'30px',
     alignItems:'center', color:'white'
      }}>
     
      <p style={{marginTop:'70px',cursor:'pointer',marginLeft:'15px'}} onClick={handleclose}><ArrowBack></ArrowBack></p>
      <p style={{marginTop:'66px'}}>Profile</p>
     </Box> 
     <Box sx={{height:'180px',padding:'10px',backgroundColor:'#ededed',display:'flex',alignItems:'center',
    justifyContent:'center'}}>
        <img style={{width:'42%',borderRadius:'50%'}} src={account.picture} alt="" />
     </Box>
     <Box sx={{height:'66px',boxShadow:'0px 2px 2px gray',padding:'10px',display:'flex',
    flexDirection:'column',justifyContent:'space-between'}}>

        <Typography sx={{color:'#008069',fontSize:'14px',paddingLeft:'10px'}}>Your Name</Typography>

        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingLeft:'10px'}}>
        <Typography sx={{fontSize:'14px'}}>{account.name}</Typography>
        <Edit sx={{color:'gray',fontSize:'19px'}}></Edit>
        </Box>
     </Box>
     <Typography sx={{fontSize:'12px',color:'gray',paddingLeft:'15px'
    ,marginTop:'15px'}}>This is not your user name or pin.This name will be visible to your whatsapp contact</Typography>

<Box sx={{height:'66px',marginTop:'10px',boxShadow:'0px 2px 2px gray',padding:'10px',display:'flex',
    flexDirection:'column',justifyContent:'space-between'}}>

        <Typography sx={{color:'#008069',fontSize:'14px',paddingLeft:'10px'}}>About</Typography>

        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingLeft:'10px'}}>
        <Typography sx={{fontSize:'14px'}}>For testing </Typography>
        <Edit sx={{color:'gray',fontSize:'19px'}}></Edit>
        </Box>
     </Box>
    </Drawer>
       
    );
};

export default Profiledrawer;