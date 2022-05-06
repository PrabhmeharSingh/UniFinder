let mod=false;
function showlinks(ID)
{
let e=document.getElementById(ID);
e.style.display="block";
}
function hidelinks(ID)
{
let e=document.getElementById(ID);
if(!mod)
e.style.display="none";
}
function mouseoverdropdown(x)
{
mod=x;
}