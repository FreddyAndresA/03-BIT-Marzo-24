let sendContact = document.getElementById("sendContact");

sendContact.addEventListener("click", ()=> {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if(name == "" || email == "" || message == "") {
        Swal.fire({
            title: "Gracias por tu contacto",
            text: "Por favor diligencia todos los campos para ponerte en contacto.",
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
            text: "Uno de nuestros asesores revisará tu solicitud y se comunicará a la mayor brevedad.",
            icon: "success",
            confirmButtonText: "Seleccionar",
            background: "#191613",
            backdrop: false,
            timer: 10000,
            timerProgressBar: true,
        })
    }
});
