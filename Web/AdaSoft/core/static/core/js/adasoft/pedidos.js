document.addEventListener("DOMContentLoaded", function () {
    pedido;
});

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}


function editarPedido(id) {
    fetchAsync("http://localhost:8092/v1/departamento/gerencia/pedidos/findById/" + id, {
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
            console.log("pedido a editar: ", data);
            this.pedido=data;
            // Get the modal
            var modal = document.getElementById("myModal");
            /* AGREGAR MODAL Y CARGAR DATOS DE LOCALSTORAGE */
            var span = document.getElementsByClassName("close")[0];


            modal.style.display = "block";
            document.getElementById("updateId").value = data.id;
            document.getElementById("updateEmail").value = data.email;
            document.getElementById("updateDireccion").value = data.direccion;
            document.getElementById("updateTelefono").value = data.telefono;
            document.getElementById("updateIdCliente").value = data.cliente;
            document.getElementById("updateIdRepartidor").value = data.repartidor;
            document.getElementById("updateTotal").value = data.total;
            document.getElementById("updateEstado").value = data.estado;
            document.getElementById("updateEstado").focus();
            document.getElementById("updateEmail").focus();
            document.getElementById("updateDireccion").focus();
            document.getElementById("updateTelefono").focus();
            document.getElementById("updateId").focus();
            document.getElementById("updateTotal").focus();
            document.getElementById("updateIdCliente").focus();
            document.getElementById("updateIdRepartidor").focus();
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

function eliminarPedido() {
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

function updatePedido(id, idcliente, idrepartidor, estado) {
    var result = confirm("¿Está seguro de que desea actualizar este pedido?");
    var pedidoSend = this.pedido;
    pedidoSend.id = id;
    pedidoSend.cliente = idcliente;
    pedidoSend.repartidor = idrepartidor;
    pedidoSend.estado = estado;
    console.log("pedido a enviar: "+pedidoSend)
    if (result) {
        fetch('http://localhost:8092/v1/departamento/gerencia/pedidos/update', {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Allow-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                },
                body: JSON.stringify(pedidoSend),
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }


    window.location.reload();
}


function deletePedido(id) {
    var result = confirm("¿Estás seguro de eliminar este pedido?");
    if (result) {
        fetch('http://localhost:8092/v1/departamento/gerencia/pedidos/delete/' + id, {
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