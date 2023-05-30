import { Box } from "@mui/material";
import Menuheader from "./Menuheader";
import Menusearch from "./Menusearch";
import Conversations from "./Conversations";


const Menu = () => {
    return (
        <Box>
           <Menuheader></Menuheader>
           <Menusearch></Menusearch>
           <Conversations></Conversations>
        </Box>
    );
};

export default Menu;