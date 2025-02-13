function debug() {
    document.getElementById('DR').innerHTML = JSON.stringify(Function("return " + document.getElementById('DT').value)())
}
