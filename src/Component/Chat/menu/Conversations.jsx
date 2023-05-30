import { Box } from "@mui/material";
import {useEffect,useState,useContext} from 'react'
import { getuser } from "../../../Service/api";
import Singleuser from "./Singleuser";
import { LoginContext } from "../../../contextapi/Loginprobider";

const Conversations = () => {
    const [user,setuser] = useState([])
    const {account} = useContext(LoginContext)
    useEffect(()=>{
        
        const fetchData = async()=>{
            const res = await getuser()
            const filter = res.filter(remain=>remain.email !== account.email)
            setuser(filter)
        }
        fetchData()
    },[account.email])
    return (
        <Box sx={{marginTop:'20px',padding:'10px'}}>
           <>
            {
                user.map(singleuser=>{
                     return <Singleuser key={singleuser._id} users={singleuser}></Singleuser>
                })
            }
           </>
        </Box>
    );
};

export default Conversations;