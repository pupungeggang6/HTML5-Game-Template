let canvas
let gl
let HUD
let context

let vShader, fShader, program, vao, vbo, texture
let laColor, laPosition, laTexcoord, luMode, luView, luPer

let view = [0, 1280, 800, 0, -1, 1]
let per = [Math.PI / 3, 1.6, 0.01, 10]

let scene = 'Title'
let state = 'Start'
let menu = false

let gameLoop
let frameCurrent
let framePrevious
let delta
