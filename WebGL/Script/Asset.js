let img = {
    test: {
        i: null,
        canvas: null,
        context: null
    }
}

function imageLoad() {
    img.test.i = new Image()
    img.test.i.src = 'Test.png'
    img.test.canvas = document.createElement('canvas')
    img.test.context = img.test.canvas.getContext('2d')
    img.test.context.drawImage(img.test.i, 0, 0)
}
