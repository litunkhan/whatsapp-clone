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

export const setConversation = async(data)=>{
     try{
        await axios.post('http://localhost:4000/conversation/add',data)
     }catch(err){
        console.log(err.message)
     }
}

export const getConversation = async(data)=>{
   try{
     const res=  await axios.post('http://localhost:4000/conversation/get',data)
         return res.data
   }catch(err){
      console.log(err.message)
   }
}

export const newMessage = async(messages)=>{

   try{
           await axios.post('http://localhost:4000/messages',messages)
   }
   catch(err){
      console.log(err.message)
   }
}

export const getmessages = async(id)=>{
     try{
          const res = await axios.get(`http://localhost:4000/allmessages/${id}`)
          return res.data
     }
     catch(err){
      console.log(err.message)
     }
}