async function solve(){
let q=document.getElementById("q").value;
let res=await fetch("http://127.0.0.1:8000/solve",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({question:q})
});
let d=await res.json();
document.getElementById("out").innerText=d.response;
}