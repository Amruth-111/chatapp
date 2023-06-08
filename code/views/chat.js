
window.addEventListener("DOMContentLoaded",async(e)=>{
    e.preventDefault();
    setInterval(async() => {
        let token=localStorage.getItem('token');
        let res=await axios.get("http://localhost:8000/message/all-messages",{headers:{'Authentication':token}})
        console.log(res.data.Data.length)

        console.log(res.data.Data)
        for(let i=0;i<res.data.Data.length;i++){
            showChatOnScreen(res.data.Data[i].message)
        }
    }, 1000);
})



console.log("sjajkXINK")
async function showChatOnScreen(msg){
    try{
       const parent=document.getElementById("msg")
       const child=`</li class="text-white">${msg}</li><br>`
       parent.innerHTML=parent.innerHTML+child
    }catch(err){
        console.log("error in showchatonscreen",err)
    }
}

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

