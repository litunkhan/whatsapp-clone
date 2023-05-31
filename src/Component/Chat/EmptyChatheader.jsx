import { MoreVert, Remove, Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { LoginContext } from "../../contextapi/Loginprobider";
import {useContext} from 'react'


const EmptyChatheader = () => {
    const {person,setperson} = useContext(LoginContext)
    return (
        <Box sx={{width:'100%', height:'46px',background:'#ededed', display:'flex',justifyContent:'space-between',padding:'5px  15px',alignItems:'center'}}>
            <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
              <img style={{width:'38px',borderRadius:'50%'}} src={person.picture} alt="" />
              <Box>
              <Typography>{person.name}</Typography>
              <Typography sx={{fontSize:'12px'}}>Online status</Typography>
              </Box>
            </Box>
            <Box sx={{display:'flex',gap:'8px'}}>
            <Search></Search>
            <MoreVert></MoreVert>
            <Remove sx={{cursor:'pointer'}} onClick={()=>setperson(null)}></Remove>
            </Box>
        </Box>
    );
};

export default EmptyChatheader;