const canvas = document.getElementById('drop-area')

const ctx = canvas.getContext("2d");
 //x y width height

const handleMouseDown = e => {
    console.log(e)
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const handleMouseMove = (e, x = mouseX, y = mouseY) => {
      console.log(e,mouseX, mouseY)
      ctx.clearRect(0,0, 1280, 990); //width and height hardcoded
      let width = 50,
          height = 50;
      ctx.lineWidth = 5;
      ctx.strokeRect(e.clientX,e.clientY,width,height);
    }
    const handleMouseUp = e => {
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
    
    canvas.addEventListener("mousemove",handleMouseMove )
    canvas.addEventListener("mouseup", handleMouseUp)
}

canvas.addEventListener('mousedown', handleMouseDown)


  // 1. click the mouse downwards
  // 2. get x y coordinates
  // 3. 
  // 4. profit