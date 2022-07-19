document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('sessionId') == null) {
        window.location.href = "http://localhost:8000/sign-in";
    }
    getUserById();
});

function getUserById() {
    var id = localStorage.getItem('sessionId');
    fetch('http://localhost:8091/v1/departamento/gerencia/usuario/findById/' + id, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Allow-Control-Allow-Origin': '*'
            },
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
            console.log("aqui");
            document.getElementById("nombreApellido").innerHTML = data.nombre + " " + data.apellido;
        })
        .catch(error => console.log(error));
}