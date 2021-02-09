var c=document.getElementById("canvas");
var ct=c.getContext("2d");
ct.rect;
 ct.beginPath();
  ct.strokeStyle="black"; 
  ct.lineWidth=10; ct.arc(250,210,40,0,2*Math.PI);
   ct.stroke(); 
   ct.strokeStyle="red"; ct.lineWidth=10; ct.arc(350,210,40,0,2*Math.PI); ct.stroke(); 
   
    ct.beginPath(); ct.strokeStyle="green"; 
    ct.lineWidth=10; ct.arc(300,240,40,0,2*Math.PI); 
    ct.stroke();
    ct.beginPath(); ct.strokeStyle="yellow"; 
    ct.lineWidth=10; ct.arc(275,300,40,0,2*Math.PI); 
    ct.stroke();
    ct.beginPath(); ct.strokeStyle="blue"; 
    ct.lineWidth=10; ct.arc(400,300,40,0,2*Math.PI); 
    ct.stroke();


