import axios from "axios"

export const addUser = async(data)=>{
    try{
        await axios.post(`http://localhost:4000/adduser`,data)
    }
    catch(err){
        console.log('error while adduser api',err.messase)
    }
}

export const getuser = async ()=>{
     try{
        const res = await axios('http://localhost:4000/user')
        return res.data
     }
     catch(err){
        console.log(err.message)
     }
}