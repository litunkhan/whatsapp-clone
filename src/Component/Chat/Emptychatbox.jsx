/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import EmptyChatheader from "./EmptyChatheader";
import Emptychatmessages from "./Emptychatmessages";
import { useContext, useEffect,useState } from "react";
import { LoginContext } from "../../contextapi/Loginprobider";
import { getConversation } from "../../Service/api";



const Emptychatbox = () => {
    const {account,person} = useContext(LoginContext)
    const [conversatios,setConversations] =  useState([])
    useEffect(()=>{
        console.log(account)
         const getConversationDetails = async()=>{
              const data = await getConversation({senderId:account.sub,reciverId:person.sub})
              setConversations(data)
         }
         getConversationDetails()
    },[person.sub,account.sub,account])
    return (
        <Box>
            <EmptyChatheader></EmptyChatheader>
            <Emptychatmessages conversatios={conversatios} ></Emptychatmessages>
           
        </Box>
    );
};

export default Emptychatbox;