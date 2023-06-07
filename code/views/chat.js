
window.addEventListener("DOMContentLoaded",async(e)=>{
    // e.preventDefault();
    let token=localStorage.getItem('token');
    let res=await axios.get("http://localhost:8000/message/all-messages",{headers:{'Authentication':token}})
    console.log(res.data)
    for(let i=0;i<res.data.length;i++){
       
    }
    const text=document.createTextNode(res.data.Data[0].message) ;
    document.getElementById("msg").appendChild(text)
    
})

let button=document.getElementById("send") 
let message=document.getElementById("message")

button.addEventListener('click',async(e)=>{
    e.preventDefault();
    let token=localStorage.getItem('token');
    console.log(message.value)
    const obj={
        msg:message.value
    }
    console.log(obj)
    const response=await axios.post("http://localhost:8000/message/messagess",obj,{headers:{'Authentication':token}})
    console.log(response.data)
    message.value=" "
    
})

