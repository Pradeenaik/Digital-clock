let hrs=document.querySelector("#hrs");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");


setInterval(()=>{
    let time=new Date();
    hrs.innerHTML=(time.getHours()<10?"0":"")+time.getHours();
    min.innerHTML=(time.getMinutes()<10?"0":"")+time.getMinutes();
    sec.innerHTML=(time.getSeconds()<10?"0":"")+time.getSeconds();
},1000)