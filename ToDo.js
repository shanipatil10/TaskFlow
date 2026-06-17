
let inp=document.querySelector("input");
let submit=document.querySelector("button");
let ol=document.querySelector("ol");
let text=inp.value;
console.log(text);

function eventhandler(){
    if(inp.value=="")return;
    let text=inp.value;
    console.log(text);
   
    let li=document.createElement("li");
    li.innerText=text;
    ol.appendChild(li);
    li.classList.add("listclass");
    
    let remove=document.createElement("button");
    remove.innerText="Remove";
    remove.classList.add("rmvbtn");
    li.append(remove);
    
    remove.addEventListener("click",()=>{
        li.remove();    
    });

    inp.value="";}

submit.addEventListener("click",eventhandler);
inp.addEventListener("keydown",(event)=>{
    if(event.key==='Enter'){
        eventhandler();
    }
});

