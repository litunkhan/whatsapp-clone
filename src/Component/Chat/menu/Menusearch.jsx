/* eslint-disable react/prop-types */
import { Search } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";


const Menusearch = ({settexts}) => {
    return (
        <Box  sx={{backgroundColor:'#ededed' ,marginTop:'8px',width:'85%',display:'flex',mx:'auto',height:'25px',alignItems:'center',borderRadius:'6px',padding:'5px'}}>
            <Box sx={{marginTop:'4px'}}>
                <Search sx={{color:'gray',paddingLeft:'6px'}}
                fontSize="small"></Search>
            </Box>
            <InputBase
            onChange={(e)=>settexts(e.target.value)}
            sx={{marginLeft:'26px'}}
            placeholder="Search or start new chat"
            ></InputBase>
        </Box>
    );
};

export default Menusearch;