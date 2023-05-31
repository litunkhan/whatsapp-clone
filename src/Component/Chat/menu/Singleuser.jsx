/* eslint-disable react/prop-types */

import { Box, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../../../contextapi/Loginprobider";
import { setConversation } from "../../../Service/api";


const Singleuser = ({users}) => {
    const {setperson,account} = useContext(LoginContext)
    const getusers = async(user)=>{
        setperson(user)
        await setConversation({senderId:account.sub,reciverId:users.sub})
    }
    return (
        <>
        <Box onClick={()=>getusers(users)} sx={{display:'flex', alignItems:'center',gap:'15px',cursor:'pointer'}}>
        <Box>
            <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src={users.picture} alt="" />
        </Box>
          <Box>
             <Box>
                <Typography>{users.name}</Typography>
             </Box>
          </Box>
        </Box>
        <Divider></Divider>
        </>
    );
};

export default Singleuser;