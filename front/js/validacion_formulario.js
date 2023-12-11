function validar() {
    let usuario = document.getElementById("nombre");
    let clave = document.getElementById("clave");
    let error = false;
document.getElementById("validar_usuario").innerHTML = "&nbsp;";
document.getElementById("validar_clave").innerHTML = "&nbsp;";    
if (usuario.value !== "Administrador01") {
        document.getElementById("validar_usuario").innerHTML = "usuario incorrecto";
        error = true;
        usuario.focus();
    }
    if (clave.value !== "clave1234") {
        document.getElementById("validar_clave").innerHTML = "clave incorrecta";
        error = true;
        clave.focus();
    }
 
    if (error == false) {
        
        document.getElementById("nombre").value = ""
        document.getElementById("validar_usuario").innerHTML = "";
        document.getElementById("clave").value = ""
        document.getElementById("validar_clave").innerHTML = "";
        
        window.location.href= "./productos.html"
    }

    if (error)
        return false;
    else
        return true;
}