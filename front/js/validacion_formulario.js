const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
const errorMessages = document.getElementById('errorMessages');
const dataOk = {username: 'admin', password: '1234'}

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    if (data.username === dataOk.username && data.password === dataOk.password) {
        console.log("ENTRE ACA");       
        window.location.href= "./productos.html"
    } else {        
        errorMessages.textContent = "Usuario o contraseña incorrectos.";
    }
})