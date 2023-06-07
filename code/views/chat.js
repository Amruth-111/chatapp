// window.addEventListener("DOMContentLoaded",async()=>{

//     let res=await axios.get("http://localhost:8000/users/user")
//     console.log(res.data)
// })


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
})