import Logingialog from "./accounts/Logingialog";
import {AppBar,Box,Toolbar,styled} from '@mui/material'


const Component = styled(Box)`
height:100vh;
background-color:#DCDCDC
`

const Header = styled(AppBar)`
 height: 205px;
 box-shadow:none;
 background-color: #00a884
 `
const Mesenger = () => {
    return (
        <Component>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
           <Logingialog></Logingialog>
        </Component>
    );
};

export default Mesenger;