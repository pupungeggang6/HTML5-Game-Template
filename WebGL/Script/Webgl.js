const vSource = `#version 300 es
    in vec4 a_position;
    in vec4 a_color;
    in vec2 a_texcoord;
    out vec4 p_color;
    out vec2 p_texcoord;
    
    void main() {
        gl_Position = a_position;
        p_color = a_color;
        p_texcoord = a_texcoord;
    }
`

const fSource = `#version 300 es
    precision highp float;
    uniform int u_mode;
    in vec4 p_color;
    in vec2 p_texcoord;
    uniform sampler2D u_texture;
    out vec4 o_color;

    void main() {
        if (u_mode == 0) {
            o_color = p_color;
        } else {
            o_color = texture(u_texture, p_texcoord);
        }
    }
`

function glInit() {
    vShader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vShader, vSource)
    gl.compileShader(vShader)
    fShader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fShader, fSource)
    gl.compileShader(fShader)
    program = gl.createProgram()
    gl.attachShader(program, vShader)
    gl.attachShader(program, fShader)
    gl.linkProgram(program)

    laColor = gl.getAttribLocation(program, 'a_color')
    laPosition = gl.getAttribLocation(program, 'a_position')
    laTexcoord = gl.getAttribLocation(program, 'a_texcoord')
    luMode = gl.getUniformLocation(program, 'u_mode')

    texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)

    vao = gl.createVertexArray()
    vbo = gl.createBuffer(gl.ARRAY_BUFFER)
    gl.bindVertexArray(vao)
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferData(gl.ARRAY_BUFFER,
        new Float32Array([
            -0.5, -0.5, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0,
            0.5, -0.5, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0,
            0.5, 0.5, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0]),
    gl.STATIC_DRAW)
    gl.vertexAttribPointer(laPosition, 3, gl.FLOAT, false, 8 * 4, 0)
    gl.enableVertexAttribArray(laPosition)
    gl.vertexAttribPointer(laColor, 3, gl.FLOAT, false, 8 * 4, 3 * 4)
    gl.enableVertexAttribArray(laColor)
    gl.vertexAttribPointer(laTexcoord, 3, gl.FLOAT, false, 8 * 4, 6 * 4)
    gl.enableVertexAttribArray(laTexcoord)
}
