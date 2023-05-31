import { Box } from "@mui/material";
import Menuheader from "./Menuheader";
import Menusearch from "./Menusearch";
import Conversations from "./Conversations";
import { useState } from "react";


const Menu = () => {
    const [text,settext] = useState('')
    return (
        <Box>
           <Menuheader></Menuheader>
           <Menusearch  settexts = {settext}></Menusearch>
           <Conversations texts={text}></Conversations>
        </Box>
    );
};

export default Menu;