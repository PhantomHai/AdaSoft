document.addEventListener("DOMContentLoaded", function () {});

function registrar() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var rut = document.getElementById('rut').value;
    var type = 1;
    /* if (checkUser(username, email, telefono, rut)) { */
        crearUser(username, password, email, direccion, telefono, rut, type);
    /* } */

}

function crearUser(username, password, email, direccion, telefono, rut, type) {
    fetch('http://localhost:8091/v1/departamento/gerencia/usuario/update', {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Allow-Control-Allow-Origin': '*',
                'Allow-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Allow-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                direccion: direccion,
                telefono: telefono,
                rut: rut,
                type: type
            })
        })
        .then(res => {
            if (res.ok) {
                console.log("HTTP request successful")
                alert('Usuario Creado Exitosamente');
                this.cargarUser();
            } else {
                console.log("HTTP request unsuccessful")
                alert('Usuario No Creado');
                window.location.reload();
            }
            return res
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error))

}

function cargarUser() {
    var usuario = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetchAsync("http://localhost:8091/v1/departamento/gerencia/usuario/findByUsername/" + usuario, {
            'method': 'GET',
            'headers': {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        })
        .then(function (data) {
            console.log(data);
            if (data.length === 0) {
                alert('Usuario no existe');
                return;
            }
            if (data.password !== password) {
                alert('Contraseña Incorrecta');
                return;
            } else {
                if (data.password === password) {
                    localStorage.setItem('sessionId', data.id);
                    localStorage.setItem('sessionType', data.type);
                    localStorage.setItem('sessionUsername', data.username);
                    if (data.type == 1) {
                        window.location.href = "http://localhost:8000/";
                    }
                }
            }
        });
}

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function saveValue(e) {
    var id = e.id; // get the sender's id to save it . 
    var val = e.value; // get the value. 
    console.log(id + ": " + val);
    localStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue(v) {
    if (!localStorage.getItem(v)) {
        return "None"; // You can change this to your defualt value. 
    }
    return localStorage.getItem(v);
}

function checkSubmit(e) {
    if (e && e.keyCode == 13) {
        validarFormulario();
    }
}