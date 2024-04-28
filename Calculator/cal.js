const butn=document.querySelectorAll(".numeric");
const input=document.querySelector("input");
const cb=document.querySelector(".clear");
const acb=document.querySelector(".acclear");
const eb=document.querySelector(".equals");


butn.forEach((butt)=>
{
    butt.addEventListener("click",()=>
    {
        a=input.value+=butt.innerText;
    })
    
})

acb.addEventListener("click",()=>
{
    input.value="";
})
cb.addEventListener("click",()=>
{
    input.value=input.value.slice(0,-1);
})

eb.addEventListener("click",()=>
{
    a=input.value;
    b=a.replace('x','*');
    input.value=eval(b);
})
