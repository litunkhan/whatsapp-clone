import { Box } from "@mui/material";
import Menuheader from "./Menuheader";
import Menusearch from "./Menusearch";


const Menu = () => {
    return (
        <Box>
           <Menuheader></Menuheader>
           <Menusearch></Menusearch>
        </Box>
    );
};

export default Menu;