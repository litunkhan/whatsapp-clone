import { Box, Dialog, Typography} from "@mui/material";
import Menu from "./menu/Menu";
import Emptymenu from "./menu/Emptymenu";
import { useContext } from "react";
import { LoginContext } from "../../contextapi/Loginprobider";


const DialogStyle = {
    height:'90%',
    width:'100%',
    maxWidth:'100%',
    margin: '20px',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'none'
}
const Chatdialough = () => {
    const {account} = useContext(LoginContext)
    return (
       <>
        {
            !account? <>
            <Box>
                <Typography>Loading...</Typography>
            </Box>
            </>:
             <Box>
             <Dialog open={true} PaperProps={{sx:DialogStyle}} hideBackdrop={true} maxWidth={'md'}>
                      
                      <Box sx={{display:'flex'}}>
                         <Box sx={{minWidth:'450px'}}>
                               <Menu></Menu>
                         </Box>
     
                         <Box sx={{width:'73%',minWidth:'300px',height:'100%',borderLeft:'1px white solid'}}>
                             <Emptymenu></Emptymenu>
                         </Box>
     
                      </Box>
     
                  </Dialog>
                 
             </Box>
        }
       </>
    );
};

export default Chatdialough;