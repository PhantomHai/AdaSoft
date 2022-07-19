document.addEventListener("DOMContentLoaded", function () {
});

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}


function editarUsuario(id) {
    fetchAsync("http://localhost:8091/v1/departamento/gerencia/usuario/findById/" + id, {
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
            console.log("usuario a editar: ", data);
            // Get the modal
            var modal = document.getElementById("myModal");
            /* AGREGAR MODAL Y CARGAR DATOS DE LOCALSTORAGE */
            var span = document.getElementsByClassName("close")[0];


            modal.style.display = "block";
            document.getElementsByClassName("repartidor")[0].style.display = "none";
            document.getElementsByClassName("repartidor")[1].style.display = "none";
            // Get the <span> element that closes the modal
            if (data.type == "2") {
                document.getElementsByClassName("repartidor")[0].style.display = "flex";
                document.getElementsByClassName("repartidor")[1].style.display = "flex";
            }
            document.getElementById("updateId").value = data.id;
            document.getElementById("updateUsername").value = data.username;
            document.getElementById("updatePassword").value = data.password;
            document.getElementById("updateEmail").value = data.email;
            document.getElementById("updateDireccion").value = data.direccion;
            document.getElementById("updateTelefono").value = data.telefono;
            document.getElementById("updateRut").value = data.rut;
            document.getElementById("updateType").value = data.type;
            document.getElementById("updatePatente").value = data.patente;
            document.getElementById("updateEstado").value = data.estado;
            document.getElementById("updatePatente").focus();
            document.getElementById("updateEstado").focus();
            document.getElementById("updateUsername").focus();
            document.getElementById("updatePassword").focus();
            document.getElementById("updateEmail").focus();
            document.getElementById("updateDireccion").focus();
            document.getElementById("updateTelefono").focus();
            document.getElementById("updateRut").focus();
            document.getElementById("updateType").focus();
            document.getElementById("updateId").focus();
            // When the user clicks on <span> (x), close the modal

            document.onkeyup = function (e) {
                if (e.key == "Escape") {
                    modal.style.display = "none";
                }
            }
            span.onclick = function () {
                modal.style.display = "none";
            }

        }).catch(error => console.log(error));
}

function crearUsuario() {
    var modal = document.getElementById("myModalCrear");
    /* AGREGAR MODAL Y CARGAR DATOS DE LOCALSTORAGE */
    var span = document.getElementsByClassName("close")[1];


    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal

    document.onkeyup = function (e) {
        if (e.key == "Escape") {
            modal.style.display = "none";
        }
    }
    span.onclick = function () {
        modal.style.display = "none";
    }

}

function eliminarUsuario() {
    var modal = document.getElementById("myModalEliminar");
    /* AGREGAR MODAL Y CARGAR DATOS DE LOCALSTORAGE */
    var span = document.getElementsByClassName("close")[2];


    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal

    document.onkeyup = function (e) {
        if (e.key == "Escape") {
            modal.style.display = "none";
        }
    }
    span.onclick = function () {
        modal.style.display = "none";
    }

}

for (i = 0; i < inputs.length; i++) {
    var id = inputs[i].getAttribute('id');
    inputs[i].value = getSavedValue(id);
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

function updateUser(id, username, email, password, telefono, direccion, rut, patente, estado, type) {
    var result = confirm("¿Está seguro de que desea actualizar este usuario?");
    if (result) {
        fetch('http://localhost:8091/v1/departamento/gerencia/usuario/update', {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Allow-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                },
                body: JSON.stringify({
                    id: id,
                    username: username,
                    password: password,
                    email: email,
                    direccion: direccion,
                    telefono: telefono,
                    rut: rut,
                    patente: patente,
                    estado: estado,
                    type: type
                }),
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }


    window.location.reload();
}

function crearUser(username, email, password, telefono, direccion, rut, patente, estado, type) {
    fetch('http://localhost:8091/v1/departamento/gerencia/usuario/update', {
            'method': 'PUT',
            'headers': {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',

            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                direccion: direccion,
                telefono: telefono,
                rut: rut,
                patente: patente,
                estado: estado,
                type: type
            })
        })
        .then(res => {
            if (res.ok) {
                console.log("HTTP request successful")
            } else {
                console.log("HTTP request unsuccessful")
            }
            return res
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error))
    window.location.reload();
}

function deleteUser(id) {
    var result = confirm("¿Estás seguro de eliminar este usuario?");
    if (result) {
        fetch('http://localhost:8091/v1/departamento/gerencia/usuario/delete/' + id, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(res => {
                if (res.ok) {
                    console.log("HTTP request successful")
                } else {
                    console.log("HTTP request unsuccessful")
                }
                return res
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
            .catch(error => console.log(error))
        window.location.reload();
    }
}



// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* MODAL END */