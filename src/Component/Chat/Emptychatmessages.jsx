/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import chatimage from '../../assets/emptyChat.png'
import Emptychatfooter from "./Emptychatfooter";
import { useContext,useState } from "react";
import { LoginContext } from "../../contextapi/Loginprobider";
import { newMessage } from "../../Service/api";

const Emptychatmessages = ({conversatios}) => {
    const {account,person} = useContext(LoginContext)
    const [messageTest,setMessageText] = useState('')
    const sendText = async(e)=>{
        const code = e.keyCode || e.which
        if(code===13){
           let message={
                senderId: account.sub,
                reciverId: person.sub,
                conversatiosId:conversatios._id,
                type:'text',
                text:messageTest
            }
            
            await newMessage(message)
            setMessageText('')
        }

    }
    return (
        <>
        <Box sx={{width:'100%',height:'75vh',backgroundImage:`url(${chatimage})`,backgroundSize:'50%', overflowY:'auto'}}>
           
            
        </Box>
        <Emptychatfooter sendTexts={sendText} setMessageText={setMessageText}
        messageTest={messageTest}
        
        ></Emptychatfooter>
        </>

    );
};

export default Emptychatmessages;