import { Box,  Divider,  Typography } from "@mui/material";
import emtyimage from '../../../assets/whatsapp_multi_device_support_update_image_1636207150180.webp'

const Emptymenu = () => {
    return (
        <>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',background:'#f8f9fa'}}>
           <img style={{width:'45%',marginTop:'50px'}} src={emtyimage} alt="" />
           <Typography sx={{fontSize:'28px',color:'gray',marginTop:'10px'}}>WhatsApp Web</Typography>
           <Typography sx={{fontSize:'14px',color:'gray',marginTop:'10px'}}>Now send and recive messages without keeping your phone online</Typography>
           <Typography sx={{fontSize:'14px',color:'gray',marginTop:'10px'}}>use WhatsApp up to 4 linked devices and 1 phone at a same time</Typography>
           
        </Box>
        <Divider sx={{marginTop:'10px'}} /> 
        </>
    );
};

export default Emptymenu;