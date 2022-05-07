let device_width=0;
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
function setdevicewidth()
{
device_width=document.body.clientWidth;
}
function load()
{
setdevicewidth();
let p=document.getElementById('imagehere');
p.style.height=(device_width*840/1920)+"px";
}
function resize()
{
setdevicewidth();
let p=document.getElementById('imagehere');
p.style.height=(device_width*840/1920)+"px";
}