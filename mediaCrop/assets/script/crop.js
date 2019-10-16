
  let counter =0,
      mousepos = [];


function writeMessage(canvas,message){
var context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
context.font = '18pt Calibri';
context.fillStyle = 'black';
context.fillText(message, 10, 25);
}
function getMousePos(canvas, evt) {
var rect = canvas.getBoundingClientRect();
return {
  x: evt.clientX - rect.left,
  y: evt.clientY - rect.top
};
}
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.style.border = '2px solid green';

canvas.addEventListener('click',function(){
  canvas.addEventListener('mousemove', function(evt) {
var mousePos = getMousePos(canvas, evt);
var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
context.fillStyle = 'red';
context.fillRect(mousePos.x,mousePos.y,10,10);

writeMessage(canvas, message);
 }, false);
});
  



function point(){
  //window.counter = window.counter+1;
 counter = counter+1;

  alert();
}