let canvas = document.getElementById('drop-area')

var ctx = canvas.getContext("2d");
ctx.strokeRect(50,50,50,50); //x y width height

let handleMouseMove = e =>{
    console.log(e)
}

let handleMouseClick = e => {
    console.log(e)
    canvas.addEventListener("mousemove", handleMouseMove)
}


canvas.addEventListener('mousedown', handleMouseClick)
//   dropArea.addEventListener('dragenter', handlerFunction, false) //
//   dropArea.addEventListener('dragleave', handlerFunction, false)
//   dropArea.addEventListener('dragover', handlerFunction, false)
//   dropArea.addEventListener('drop', handlerFunction, false) // this will remove the box?

  