let sendPqr = document.getElementById("sendPqr");

sendPqr.addEventListener("click", ()=> {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let randomNumber = Math.ceil(Math.random() * 20000)
    

    if(name == "" || email == "" || message == "") {
        Swal.fire({
            title: "Gracias por tu contacto",
            text: "Por favor selecciona diligencia todos los campos para ponerte en contacto.",
            icon: "warning",
            confirmButtonText: "Seleccionar",
            background: "#191613",
            backdrop: false,
            timer: 10000,
            timerProgressBar: true,
        })
    }
    else {
        Swal.fire({
            title: "Gracias por tu contacto",
            html: `<p>Tu contacto ha sido recibido con el radicado número <br><strong>${randomNumber}</strong><br>Uno de nuestros asesores revisará tu solicitud y se comunicará a la mayor brevedad dentro de los siguientes 15 días hábiles.</p>`,
            icon: "success",
            confirmButtonText: "Seleccionar",
            background: "#191613",
            backdrop: false,
            timer: 10000,
            timerProgressBar: true,
        })
    }
});