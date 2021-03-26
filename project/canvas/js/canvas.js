window.onload = ()=>{
  const {canvas,ctx} = getCanvas('#test-canvas')
  const canvasWrapper = document.querySelector('#canvas-wrapper')
  canvasWrapperWidth = canvasWrapper.offsetWidth
  canvasWrapperHeight = canvasWrapper.offsetHeight
  canvas.width = canvasWrapperWidth
  canvas.height = canvasWrapperHeight
  console.log(canvasWrapperWidth)
  console.log(canvasWrapperHeight)
  console.log(ctx)
  const canvasImg = document.querySelector('#canvas-bg')
//   ctx.drawImage(canvasImg,10,10,100,100)
  ctx.drawImage(canvasImg,0, 0, canvasWrapperWidth, canvasWrapperWidth * scale)
  draw(ctx)
  const saveCanvas = generateSaveCanvas()

  document.querySelector('#save-btn').addEventListener('click',()=>{
    saveCanvas(canvas)
  })

  console.log('xxxx')
}

let canvasWrapperWidth,canvasWrapperHeight
const scale = 0.5659

function getCanvas(id,bgImg){
    const canvas = document.querySelector(id)
    const ctx = canvas.getContext('2d')
    return {canvas,ctx}
}

function draw(ctx) {
    ctx.fillStyle = "rgb(182,212,221)";
    let width = 120,height = 48;
    let x = (canvasWrapperWidth - width)*0.5
    let y = (canvasWrapperHeight - height)*0.5
    console.log(x,y,width,height)
    ctx.fillRect (x,y,width,height);
    ctx.font = '16px serif'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillStyle = "#000"
    const text = ctx.measureText('xxx') // after set font
    console.log(text.width)
    ctx.fillText('xxx',x+(width-text.width)*0.5,y+(height-16)*0.5)
}

function generateSaveCanvas() {
    const saveHref = document.querySelector('#save-href')
    const saveImg = document.querySelector('#save-img')
    return function(canvas) {
        const tempSrc = canvas.toDataURL('image/png')
        saveHref.href = tempSrc
        saveHref.click()
    }
}



