let randomnum= ()=>{
    return Math.floor(Math.random()*256);
}

let changecolour= ()=>{

document.body.style.backgroundColor=`rgb(${randomnum()},${randomnum()},${randomnum()})`;

}

let btn=document.getElementById("btn");
btn.addEventListener('click',changecolour);
window.addEventListener('load',changecolour);