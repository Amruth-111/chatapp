
window.addEventListener("DOMContentLoaded",async(e)=>{
    e.preventDefault();
        let token=localStorage.getItem('token');
        let res=await axios.get("http://localhost:8000/message/all-messages",{headers:{'Authentication':token}})
        console.log(res.data)
        const show=res.data.Data
        for(let i=show.length-10;i<show.length;i++){
            localStorage.setItem(show[i].id,show[i].message)  
            showChatOnScreen(show[i].message,show[i].message)
        }
})

console.log("sjajkXINK")
async function showChatOnScreen(id,pmsg){
    try{
        if(pmsg){
            let recent=id-10
            localStorage.removeItem(recent) 
            localStorage.setItem(id,pmsg)
        }
        const msg=localStorage.getItem(id)
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
    showChatOnScreen(response.data.message.id,response.data.message.message)
    message.value=" "
    
})

