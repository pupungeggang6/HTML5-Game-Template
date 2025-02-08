let canvas
let gl
let HUD
let context

let vShader, fShader, program, vao, vbo, texture
let laColor, laPosition, laTexcoord, luMode

let scene = 'Title'
let state = 'Start'
let menu = false

let gameLoop
let frameCurrent
let framePrevious
let delta
