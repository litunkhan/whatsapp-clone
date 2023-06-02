/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import chatimage from '../../assets/emptyChat.png'
import Emptychatfooter from "./Emptychatfooter";
import { useContext,useEffect,useState } from "react";
import { LoginContext } from "../../contextapi/Loginprobider";
import { getmessages, newMessage } from "../../Service/api";
import EmptyChatSingleMessages from "./EmptyChatSingleMessages";

const Emptychatmessages = ({conversatios}) => {
    const {account,person} = useContext(LoginContext)
    const [messageTest,setMessageText] = useState('')
    const [chatmessages,setchatMessages] = useState([])
    const [newMessages,setnewMassage] = useState(false)
    const sendText = async(e)=>{
        const code = e.keyCode || e.which
        if(code===13){
           let message={
                senderId: account.sub,
                reciverId: person.sub,
                conversatiosId:conversatios._id,
                type:'text',
                text:messageTest,
                date: new Date
            }
            
            await newMessage(message)
            setMessageText('')
            setnewMassage(pre=> !pre)

        }
}         
         useEffect(()=>{
            const getMessageDetails = async()=>{
                 let res = await getmessages(conversatios._id)
                 setchatMessages(res)
                 console.log(res)
            }

            conversatios._id && getMessageDetails()

         },[conversatios._id,person._id,newMessages])
    return (
        <>
        <Box sx={{width:'100%',height:'75vh',backgroundImage:`url(${chatimage})`,backgroundSize:'50%', overflowY:'auto'}}>
           
           {
             chatmessages &&  (
                chatmessages.map(message=>{
                    return <Box sx={{padding:'2px 20px'}} key={message._id}>
                          <EmptyChatSingleMessages messages={message}></EmptyChatSingleMessages>
                    </Box>
                  })
             ) 
           }
            
        </Box>
        <Emptychatfooter sendTexts={sendText} setMessageText={setMessageText}
        messageTest={messageTest}
        
        ></Emptychatfooter>
        </>

    );
};

export default Emptychatmessages;