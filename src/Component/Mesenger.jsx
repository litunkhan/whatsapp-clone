
import { useContext } from "react";
import Logingialog from "./accounts/Logingialog";
import {AppBar,Box,Toolbar,styled} from '@mui/material'
import { LoginContext } from "../contextapi/Loginprobider";
import Chatdialough from "./Chat/Chatdialough";


const Component = styled(Box)`
height:100vh;
background-color:#DCDCDC
`

const Header = styled(AppBar)`
 height: 105px;
 box-shadow:none;
 background-color: #00A884
 `

const LoginHeader = styled(AppBar)`
 height: 205px;
 box-shadow:none;
 background-color: #00a884
 `
const Mesenger = () => {
    const {account} = useContext(LoginContext)
    return (
        
        <Component>
            {
                account? <>
                <Header>
                <Toolbar>

                </Toolbar>
            </Header>
                
                <Chatdialough></Chatdialough>
                </>:
                <>
            <LoginHeader>
                <Toolbar>

                </Toolbar>
            </LoginHeader>
           <Logingialog></Logingialog>
                
                </>
            }
        </Component>
       
        
    );
};

export default Mesenger;