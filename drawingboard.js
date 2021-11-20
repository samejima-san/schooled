let canvas = document.getElementById("canvas")
let question = document.getElementById('question')
const ctx = canvas.getContext("2d")


let isDrawing = false;
let x = 0;
let y = 0;

// How thick the lines should be
ctx.lineWidth = 2
ctx.strokeStyle = 'black'
let clearbutton = document.querySelector(".clear")
let slider = document.querySelector('.slider')

clearbutton.addEventListener('click', () =>{
  ctx.clearRect(0,0,canvas.width, canvas.height)
})

slider.addEventListener('click', () =>{
   ctx.lineWidth = slider.value;
})

// Selecting all the div that has a class of clr
let clrs = document.querySelectorAll(".clr")
// Converting NodeList to Array
clrs = Array.from(clrs)

for(const clr of clrs){
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
}

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
canvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
  });
  
canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      drawLine(ctx, x, y, e.offsetX, e.offsetY);
      x = e.offsetX
      y = e.offsetY
    }
  });
  
  window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
      drawLine(ctx, x, y, e.offsetX, e.offsetY);
      x = 0
      y = 0
      isDrawing = false
    }
  });
  
  function drawLine(context, x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
  }