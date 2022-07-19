document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('sessionId') == null) {
        window.location.href = "http://localhost:8000/sign-in";
    }


});

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}


function editarProducto(id) {
    fetchAsync("http://localhost:8090/v1/departamento/gerencia/producto/findById/" + id, {
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
            console.log("producto a editar: ", data);
            // Get the modal
            var modal = document.getElementById("myModal");
            /* AGREGAR MODAL Y CARGAR DATOS DE LOCALSTORAGE */
            var span = document.getElementsByClassName("close")[0];


            modal.style.display = "block";
            document.getElementById("updateId").value = data.id;
            document.getElementById("updateName").value = data.nombre;
            document.getElementById("updateCodigo").value = data.codigo;
            document.getElementById("updatePrecio").value = data.precio;
            document.getElementById("updateStock").value = data.stock;
            document.getElementById("updateDescripcion").value = data.descripcion;
            document.getElementById("updateCategoria").value = data.categoria;
            document.getElementById("updateImagen").value = data.imagen;
            document.getElementById("updateName").focus();
            document.getElementById("updateId").focus();
            document.getElementById("updateCodigo").focus();
            document.getElementById("updatePrecio").focus();
            document.getElementById("updateStock").focus();
            document.getElementById("updateDescripcion").focus();
            document.getElementById("updateCategoria").focus();
            document.getElementById("updateImagen").focus();
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

function crearProducto() {
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

function eliminarProduct() {
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

function updateProduct(id, nombre, codigo, precio, stock, descripcion, categoria, imagen) {
    var result = confirm("¿Está seguro de que desea actualizar este producto?");
    if (result) {
        fetch('http://localhost:8090/v1/departamento/gerencia/producto/update', {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Allow-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                },
                body: JSON.stringify({
                    id: id,
                    nombre: nombre,
                    codigo: codigo,
                    precio: precio,
                    stock: stock,
                    descripcion: descripcion,
                    categoria: categoria,
                    imagen: imagen
                }),
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }


    window.location.reload();
}

function crearProduct(nombre, codigo, precio, stock, descripcion, categoria, imagen) {
    fetch('http://localhost:8090/v1/departamento/gerencia/producto/update', {
            'method': 'PUT',
            'headers': {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',

            },
            body: JSON.stringify({
                nombre: nombre,
                codigo: codigo,
                precio: precio,
                stock: stock,
                descripcion: descripcion,
                categoria: categoria,
                imagen: imagen
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

function deleteProduct(id) {
    var result = confirm("¿Estás seguro de eliminar este producto?");
    if (result) {
        fetch('http://localhost:8090/v1/departamento/gerencia/producto/delete/' + id, {
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