const button1=document.getElementById('btn1');
 
 
    button1.addEventListener("click",()=>{
        if(button1.innerHTML==="click-me"){
            button1.innerHTML="clicked!";
        }else{
            button1.innerHTML="click-me";
        }
    });
   
 
const hover=document.getElementById('coh');
hover.addEventListener("mouseover",()=>{
    hover.style.backgroundColor ="blue";
})
hover.addEventListener("mouseout",()=>{
    hover.style.backgroundColor ="lightgray";
})

const input1=document.getElementById('input');
const pra=document.getElementById('inpra');
input1.addEventListener("input",()=>{
    pra.innerText=input1.value;
});


const clickBtn = document.getElementById('clickMe');
const disableBtn = document.getElementById('disableClick');


function mainclick() {
    alert('Button Clicked!');
}

clickBtn.addEventListener("click", mainclick);

disableBtn.addEventListener("click", () => {
    clickBtn.removeEventListener("click", mainclick);
    alert("Click event disabled!");
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {  // या event.keyCode === 13 (पुराना तरीका)
        alert("Enter key was pressed!");
    }
});

