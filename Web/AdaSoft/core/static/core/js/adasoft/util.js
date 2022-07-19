document.addEventListener("DOMContentLoaded", function () {

    console.log("cargando usuario");
    console.log(localStorage.getItem('sessionId'));
    user = getUserById();
    /* if (localStorage.getItem('sessionId') == null) {
        window.location.href = "http://localhost:8000/sign-in";
    } */
    const sitiosRestringidos = [];
    sitiosRestringidos.push("http://localhost:8000/dashboard/");
    sitiosRestringidos.push("http://localhost:8000/usuarios/");
    sitiosRestringidos.push("http://localhost:8000/productos/");
    sitiosRestringidos.push("http://localhost:8000/pedidos/");
    sitiosRestringidos.push("http://localhost:8000/admin-profile/");
    console.log(sitiosRestringidos);
    console.log(window.location.href);
    for (let i = 0; i < sitiosRestringidos.length; i++) {
        if (window.location.href == sitiosRestringidos[i] && !isLogged()) {
            window.location.href = "http://localhost:8000/sign-in/";
        }
        if(window.location.href == sitiosRestringidos[i] && localStorage.getItem('sessionType') != 0){
            console.log("usuario sin autorización");
            window.location.href = "http://localhost:8000/sign-in/";
        }
    }
    /* if(){} */


    console.log("usuario cargado");
});

function Logout() {
    console.log("logout");
    window.location.href = "http://localhost:8000/landing-page";
    localStorage.removeItem('sessionId');
}

function getUserById() {
    var id = localStorage.getItem('sessionId');
    fetchAsync("http://localhost:8091/v1/departamento/gerencia/usuario/findById/" + id, {
            'method': 'GET',
            'headers': {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        }).then(function (data) {
            console.log(data);
            document.getElementById("usuarioLogeado").innerHTML = data.username;
            var usuarioFormulario = document.getElementById("usuarioFormulario");
            if(usuarioFormulario){
                usuarioFormulario.value=data.username;
                var correoFormulario = document.getElementById("correoFormulario");
                correoFormulario.value=data.email;
            }
            if (document.getElementById("nombreApellido") != null) {
                document.getElementById("nombreApellido").innerHTML = data.nombre + " " + data.apellido;
                document.getElementById("fullName").innerHTML = data.nombre + " " + data.apellido;
                document.getElementById("numero").innerHTML = data.telefono;
                document.getElementById("email").innerHTML = data.email;
                document.getElementById("direccion").innerHTML = data.direccion;
                document.getElementById("rut").innerHTML = data.rut;
            }
            return data
        })
        .catch(error => console.log(error));
}

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function isLogged() {
    return localStorage.getItem('sessionId') != null;
}
