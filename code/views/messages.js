
let sendbtn=document.getElementById("send") 
let message=document.getElementById("chat")


window.addEventListener("DOMContentLoaded",async()=>{
    try{
         const groupId=localStorage.getItem("groupId")
         const response=await axios.get("http://localhost:8000/message/all-messages",{headers:{"Authorization":groupId}})
 
         const showData=response.data.allData;
         console.log(showData[1].userName)
         if(showData.length<=10){
             for(let i=0;i<10;i++){        
                 localStorage.setItem(showData[i].userName,showData[i].message)     
                 showChatOnScreen(showData[i].userName)
             } 
         } else{
             for(let i=showData.length-10;i<showData.length;i++){        
                 localStorage.setItem(showData[i].id,showData[i].message)     
                 showChatOnScreen(showData[i].userName)   
         }
     }
 
    }catch(err){
     console.log("dom loading error in messages",err)
    }
 })

 //show chat on screen

 async function showChatOnScreen(userName,postmsg){
    try{
            if(postmsg){
                let recent=id-10;
                localStorage.removeItem(recent)
                localStorage.setItem(id,postmsg)
                window.location.reload();
            }
        const msg=localStorage.getItem(userName)
        const parent=document.getElementById("allmessages")
        const child=`</li class="text-white">${userName}:${msg}</li><br>`
        parent.innerHTML=parent.innerHTML+child
    }catch(e){
        console.log("error in showchatonscreen",err)
    }
 }

 console.log(sendbtn)
 sendbtn.onclick=async(e)=>{
    try{
        e.preventDefault();
        const groupId=localStorage.getItem("groupId")
        const obj={
            msg:message.value,
            groupId:groupId
        }
        const token=localStorage.getItem("token")
        const response=await axios.post("http://localhost:8000/message/messagess",obj,{headers:{'Authentication':token}})
        console.log(response.data)
        showChatOnScreen(response.data.message.id,response.data.message.message)
    }catch(e){
        console.log("error in snding message",err)
    }
 }
 
 