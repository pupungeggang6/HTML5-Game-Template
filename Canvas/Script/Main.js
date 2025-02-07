window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    canvas.addEventListener('mouseup', mouseUp, false)

    imageLoad()
    frameCurrent = Date.now()
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    framePrevious = frameCurrent
    frameCurrent = Date.now()
    delta = frameCurrent - framePrevious

    if (scene === 'Title') {
        loopTitle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function keyDown(event) {
    let key = event.key

    if (state === 'Start') {
        state = ''
    }

    if (scene === 'Title') {
        keyDownTitle(key)
    }
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let pos = {x: (event.clientX - targetRect.left) / targetRect.width * canvas.width, y: (event.clientY - targetRect.top) / targetRect.height * canvas.height}
    let button = event.button

    if (state === 'Start') {
        state = ''
    }

    if (scene === 'Title') {
        mouseUpTitle(pos, button)
    }
}

function errorHandle(obj, url, line, col, obj) {
    if (obj === null) {
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}
