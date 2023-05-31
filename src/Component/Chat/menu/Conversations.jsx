/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Box } from "@mui/material";
import {useEffect,useState,useContext} from 'react'
import { getuser } from "../../../Service/api";
import Singleuser from "./Singleuser";
import { LoginContext } from "../../../contextapi/Loginprobider";

const Conversations = ({texts}) => {
    const [user,setuser] = useState([])
    const {account} = useContext(LoginContext)
    useEffect(()=>{
        
        const fetchData = async()=>{
            const res = await getuser()
    const filter = res.filter(remain=>remain.name.toLowerCase().includes(texts.toLowerCase()))
            setuser(filter)
        }
        fetchData()
    },[texts])
    return (
        <Box sx={{marginTop:'20px',padding:'14px',overflowY:'auto',WebkitScrollSnapType:'none'}}>
           <>
            {
                user.map(singleuser=>{
                    if(singleuser.sub !== account.sub ){
                        return <><Singleuser key={singleuser._id} users={singleuser}></Singleuser></>
                    }
                      
                    
                })
            }
           </>
        </Box>
    );
};

export default Conversations;