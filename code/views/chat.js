

const chat=document.getElementById("chat")
const sendButton=document.getElementById('send')
const logout=document.getElementById("logout");

logout.addEventListener("click",async()=>{
    if(confirm("do you want to log out?")){
        window.location.href="./login.html"
    }else{
        window.location.reload();
    }

    
})

window.addEventListener("DOMContentLoaded",async(e)=>{
    try{
        // e.preventDefault();
        getAllGroupNames()
    }catch(e){
        console.log("dom loading error",err)
    }
})


async function getAllGroupNames(addGroup){
    try{
        if(addGroup){
            const parent=document.getElementById("groupButtons")
            parent.innerHTML=""
           }
           const token=localStorage.getItem("token")
           const data=await axios.get("http://localhost:8000/group/getname",{
            headers:{"Authentication":token}
        })
        const parent=document.getElementById("groupButtons")
        const groupNames=data.data.groupNames
        const groupId=data.data.groupId
        console.log(groupId,groupNames)
        for(let i=0;i<groupNames.length;i++){
            console.log(groupId)
            let child=`<button onclick="insideGroup(${groupId[i]})" class="btn btn-secondary btn-lg" style="width:100%;margin-bottom:5px">${groupNames[i]}</button>`
            parent.innerHTML=parent.innerHTML+child
        }

    }catch(e){
        console.log("error in get all group name",err)
    }
}


async function insideGroup(id){
    try{
        localStorage.setItem("groupId",id)
        window.location.href="./messages.html"
    }catch(e){
        console.log("error in inside group FE",err)
    }
}

//creating groups


//create button
document.getElementById('newgroup').onclick=async(e)=>{
    e.preventDefault();
        const input=document.createElement('input')
        input.type='text';
        input.id="groupname";
        input.placeholder="enter group name";
        console.log(input)

        const button=document.createElement("button")
        const text=document.createTextNode("create")
        button.id="createButton"
        button.appendChild(text)
        console.log(button)

        const parent1=document.getElementById("group")
        const parent2=document.getElementById("gbutton")
        parent1.appendChild(input);
        parent2.appendChild(button);

        const creategrpbtn=document.getElementById("createButton")
        console.log(creategrpbtn)
        creategrpbtn.onclick=async()=>{
            try{
                console.log("create button is clicked")
                const name=document.getElementById("groupname")
                const grp={
                    gname:name.value
                }
                const token=localStorage.getItem("token")
                const response=await axios.post("http://localhost:8000/group/addgroup",grp,{
                headers:{"Authentication":token}
            })
            console.log(response)

            }catch(e){
                    console.log(e)
            }

    }


}

//create button functionality

