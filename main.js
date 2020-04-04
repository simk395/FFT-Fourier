const canvas = document.getElementById('drop-area')

const ctx = canvas.getContext("2d");
 //x y width height

const handleMouseMove = e =>{
    console.log(e)
    ctx.strokeRect(e.clientX,e.clientY,e.clientX,e.clientY);
}

const handleMouseUp = e => {
    canvas.removeEventListener("mousemove", handleMouseMove)
}

const handleMouseDown = e => {
    console.log(e)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseup", handleMouseUp)
}

canvas.addEventListener('mousedown', handleMouseDown)


  